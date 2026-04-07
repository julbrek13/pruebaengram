import { describe, expect, it } from "vitest";

import { sum } from "../src/lib/sum.js";
import { capitalize, isPalindrome, reverse } from "../src/string-utils.js";

describe("edge cases", () => {
  describe("string-utils", () => {
    it("capitalize handles empty, undefined and null-like values", () => {
      expect(capitalize("")).toBe("");
      expect(capitalize(undefined as unknown as string)).toBe("");
      expect(capitalize(null as unknown as string)).toBe("");
    });

    it("reverse keeps special characters in reversed order", () => {
      expect(reverse("mañana")).toBe("anañam");
      expect(reverse("😀👍")).toBe("👍😀");
    });

    it("isPalindrome supports special characters exactly as provided", () => {
      expect(isPalindrome("reconocer")).toBe(true);
      expect(isPalindrome("radár")).toBe(false);
    });
  });

  describe("sum", () => {
    it("handles negative values", () => {
      expect(sum(-10, 4)).toBe(-6);
      expect(sum(-5, -5)).toBe(-10);
    });

    it("handles boundary values around safe integers", () => {
      expect(sum(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER);
      expect(sum(Number.MIN_SAFE_INTEGER, 1)).toBe(Number.MIN_SAFE_INTEGER + 1);
    });
  });
});
