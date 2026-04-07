import { describe, expect, it } from "vitest";

import { capitalize, isPalindrome, reverse } from "../src/string-utils.js";

describe("string-utils", () => {
  describe("capitalize", () => {
    it("returns the first letter in uppercase", () => {
      expect(capitalize("hola")).toBe("Hola");
    });

    it("returns empty string when input is empty", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("reverse", () => {
    it("reverses a string", () => {
      expect(reverse("hola")).toBe("aloh");
    });

    it("returns empty string when input is empty", () => {
      expect(reverse("")).toBe("");
    });
  });

  describe("isPalindrome", () => {
    it("returns true when string is palindrome", () => {
      expect(isPalindrome("radar")).toBe(true);
    });

    it("returns false when string is not palindrome", () => {
      expect(isPalindrome("hola")).toBe(false);
    });
  });
});
