export function capitalize(str: string): string {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1);
}

export function reverse(str: string): string {
  return Array.from(str).reverse().join("");
}

export function isPalindrome(str: string): boolean {
  return str === reverse(str);
}
