import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchUserAndNotify } from "../src/lib/user-service.js";

// Suite de integración real: NO mockear notifications.
describe("tp4 integration suite", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("flujo feliz integra user-service + notifications", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "1", name: "Ana" }),
    });
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
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "2", name: "Beto" }),
    });
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    vi.stubGlobal("fetch", fetchMock);

    const result = await fetchUserAndNotify("2");

    expect(result).toEqual({ id: "2", name: "Beto" });
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Beto"));
  });
});
