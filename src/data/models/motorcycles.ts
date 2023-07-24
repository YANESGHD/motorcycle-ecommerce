import '../connection/mongoConnection';
import {  Schema, model, models } from "mongoose";

const MotorcyclesSchema =  new Schema({
  "baseProductCode": String,
  "name": String,
  "financialDisclaimer": String,
  "formattedName": String,
  "description": String,
  "modelYear": Number,
  "modelCode": String,
  "modelFamily": String,
  "categoryCode": String,
  "categoryName": String,
  "parentCategoryCode": String,
  "parentCategoryName": String,
  "url": String,
  "primaryImageThumbnailUrl": String,
  "navigationImageUrl": String,
  "price": Number,
  "priceFormatted": String,
  "monthlyPrice": Number,
  "monthlyPriceFormatted": String,
  "priceDisclaimerNumber": Number,
})

export const Motorcycles = models.Motorcycles || model("Motorcycles", MotorcyclesSchema)
