import { model, models, Schema, Document } from "mongoose";

export interface IQuery {
  name: string;
  email: string;
  phone: string;
  drug_license: boolean;
  gst: boolean;
  wholesaler: boolean;
  products: string[];
  status: "pending" | "approved" | "rejected";
  comment: string;
}

export interface IQueryDoc extends IQuery, Document {}
const QuerySchema = new Schema<IQuery>(
  {
    name: { type: String, required: true },
    email: { type: String },
    drug_license: { type: Boolean, default: true },
    gst: { type: Boolean, default: true },
    wholesaler: { type: Boolean, default: true },
    products: [{ type: String }],
    status: { type: String,enum: ["pending", "approved", "rejected"], default: "pending" },
    comment: { type: String, default: "" },
    phone: { type: String, required: true },

  },
  { timestamps: true }
);

const Query =
  models?.Query || model<IQuery>("Query", QuerySchema);

export default Query;
