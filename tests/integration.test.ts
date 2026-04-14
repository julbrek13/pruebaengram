import { afterEach, describe, expect, it, vi } from "vitest";
import { sendNotification } from "../src/lib/notifications.js";
import { fetchUserAndNotify } from "../src/lib/user-service.js";
import { createApiUser, createUserFetchResponse } from "./fixtures.js";

// Suite de integración real: NO mockear notifications.
describe("tp4 integration suite", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("flujo feliz integra user-service + notifications", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(createUserFetchResponse({ user: createApiUser() }));
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.stubGlobal("fetch", fetchMock);

    const result = await fetchUserAndNotify("1");

    expect(fetchMock).toHaveBeenCalledWith("https://api.example.com/users/1");
    expect(result.name).toBe("Ana");
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Notify 1"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Ana"));
  });

  it("flujo feliz no está hardcodeado y preserva el contrato User", async () => {
    const user = createApiUser({ id: "2", name: "Beto" });
    const fetchMock = vi
      .fn()
      .mockResolvedValue(createUserFetchResponse({ user }));
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.stubGlobal("fetch", fetchMock);

    const result = await fetchUserAndNotify("2");

    expect(result).toEqual(user);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Beto"));
  });

  it("guardrail: la suite de integración usa notifications real (sin vi.mock)", () => {
    expect(vi.isMockFunction(sendNotification)).toBe(false);
  });
});
