import '../connection/mongoConnection';
import {  Schema, model, models } from "mongoose";

const LeadSchema =  new Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  product_type: String,
  product_name: String,
  product_price: Number,
})

export const Lead = models.Lead || model("Lead", LeadSchema)
