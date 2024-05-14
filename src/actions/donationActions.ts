// integrate stripe payment Here
import mongoose from "mongoose";

export async function createDonation(formData: FormData): Promise<string> {
  const { amount, name, message, payment } = Object.fromEntries(formData);
  await mongoose.connect(process.env.MONGODB_URI as string);
  // create donation model here

  return "";
}
