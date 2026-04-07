export async function sendNotification(userId: string, message: string): Promise<boolean> {
  console.log(`Notify ${userId}: ${message}`);
  return true;
}
