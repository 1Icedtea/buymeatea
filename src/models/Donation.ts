// add validators
import { model, models, Schema } from "mongoose";

type Donation = {
  amount: number;
  name: string;
  message?: string;
  payment: string;
};

const donationSchema = new Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  message: { type: String },
  payment: { type: String, required: true },
});

export const DonationModel =
  models?.Donation || model<Donation>("Donation", donationSchema);
