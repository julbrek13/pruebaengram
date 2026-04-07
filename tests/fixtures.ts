export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: "student" | "mentor";
}

const baseUser: MockUser = {
  id: "user-001",
  name: "Maca",
  email: "maca@example.com",
  role: "student",
};

export function createMockUser(overrides: Partial<MockUser> = {}): MockUser {
  return {
    ...baseUser,
    ...overrides,
  };
}

export const sumCases = [
  { a: 2, b: 3, expected: 5, label: "positive numbers" },
  { a: 0, b: 7, expected: 7, label: "zero and positive" },
  { a: -2, b: 5, expected: 3, label: "negative and positive" },
];

export function createTestLifecycle() {
  const events: string[] = [];

  return {
    events,
    setup() {
      events.push("setup");
    },
    teardown() {
      events.push("teardown");
    },
  };
}
