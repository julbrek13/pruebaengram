import { sendNotification } from "./notifications.js";

export interface User {
  id: string;
  name: string;
}

export async function fetchUserAndNotify(userId: string): Promise<User> {
  const response = await fetch(`https://api.example.com/users/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const user = (await response.json()) as User;
  console.info("Fetched user", user.id);
  await sendNotification(user.id, `Welcome ${user.name}`);

  return user;
}
