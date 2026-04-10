import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("../src/lib/notifications.js", () => ({
  sendNotification: vi.fn().mockResolvedValue(true),
}));

import { sendNotification } from "../src/lib/notifications.js";
import { fetchUserAndNotify } from "../src/lib/user-service.js";

describe("tp4 unit suite (aislamiento con mocks)", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("aísla dependencias y verifica contratos de llamadas", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "u-1", name: "Ada" }),
    });

    vi.stubGlobal("fetch", fetchMock);
    const infoSpy = vi.spyOn(console, "info").mockImplementation(() => {});

    const user = await fetchUserAndNotify("u-1");

    expect(fetchMock).toHaveBeenCalledWith("https://api.example.com/users/u-1");
    expect(sendNotification).toHaveBeenCalledWith("u-1", "Welcome Ada");
    expect(infoSpy).toHaveBeenCalledWith("Fetched user", "u-1");
    expect(user).toEqual({ id: "u-1", name: "Ada" });
  });

  it("propaga error del canal de notificación en modo unit", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "u-2", name: "Grace" }),
    });
    vi.mocked(sendNotification).mockRejectedValueOnce(new Error("notify failed"));

    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchUserAndNotify("u-2")).rejects.toThrow("notify failed");
    expect(sendNotification).toHaveBeenCalledWith("u-2", "Welcome Grace");
  });
});
