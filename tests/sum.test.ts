import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { sum } from "../src/lib/sum.js";
import { createMockUser, createTestLifecycle, sumCases } from "./fixtures.js";

describe("sum", () => {
  const lifecycle = createTestLifecycle();

  beforeEach(() => {
    lifecycle.setup();
  });

  afterEach(() => {
    lifecycle.teardown();
  });

  it("uses user fixture for shared setup data", () => {
    const user = createMockUser({ role: "mentor" });

    expect(user).toMatchObject({
      id: "user-001",
      name: "Maca",
      role: "mentor",
    });
  });

  it("adds numbers using shared fixture cases", () => {
    for (const testCase of sumCases) {
      expect(sum(testCase.a, testCase.b)).toBe(testCase.expected);
    }
  });

  it("runs setup and teardown through helper", () => {
    expect(lifecycle.events).toContain("setup");
  });

  it("records teardown from previous tests", () => {
    expect(lifecycle.events).toContain("teardown");
  });
});
