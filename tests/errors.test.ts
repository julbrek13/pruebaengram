import { afterEach, describe, expect, it, vi } from "vitest";
import * as notificationsModule from "../src/lib/notifications.js";
import { fetchUserAndNotify } from "../src/lib/user-service.js";

describe("tp4 async error paths", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("rechaza cuando HTTP no es OK", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ id: "1", name: "Ana" }),
    });
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchUserAndNotify("1")).rejects.toThrow("Failed to fetch user");
    expect(logSpy).not.toHaveBeenCalled();
  });

  it("propaga error cuando fetch rechaza", async () => {
    const fetchError = new Error("Network down");
    const fetchMock = vi.fn().mockRejectedValue(fetchError);
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchUserAndNotify("1")).rejects.toThrow("Network down");
    expect(logSpy).not.toHaveBeenCalled();
  });

  it("rechaza cuando response.json falla", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => {
        throw new Error("Invalid JSON");
      },
    });
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchUserAndNotify("1")).rejects.toThrow("Invalid JSON");
    expect(logSpy).not.toHaveBeenCalled();
  });

  it("rechaza cuando sendNotification falla", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "1", name: "Ana" }),
    });
    const notifySpy = vi
      .spyOn(notificationsModule, "sendNotification")
      .mockRejectedValueOnce(new Error("Notification channel down"));

    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchUserAndNotify("1")).rejects.toThrow("Notification channel down");
    expect(notifySpy).toHaveBeenCalledWith("1", "Welcome Ana");
  });
});
