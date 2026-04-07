import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("../src/lib/notifications.js", () => ({
  sendNotification: vi.fn().mockResolvedValue(true),
}));

import { sendNotification } from "../src/lib/notifications.js";
import { fetchUserAndNotify } from "../src/lib/user-service.js";

describe("mocks and stubs", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("mocks external fetch and verifies module stub + spy calls", async () => {
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

  it("throws when fetch returns non-ok response", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchUserAndNotify("u-2")).rejects.toThrow("Failed to fetch user");
    expect(sendNotification).not.toHaveBeenCalled();
  });
});
