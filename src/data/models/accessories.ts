import '../connection/mongoConnection';
import {  Schema, model, models } from "mongoose";

const AccessoriesSchema =  new Schema({
  price: Number,
  retailPriceFormatted: String,
  primaryThumbnailUrl: String,
  priceFormatted: String,
  badges: [String],
  baseProductCode: String,
  pdpProductUrl: String,
  formattedName: String,
  superCategoryCodes: [String],
  primaryCategoryName: String,
  productOptions: [String],
  hoverThumbnailUrl: String,
  numberOfReviews: Number,
  name: String,
  retailPrice: Number,
  averageRating: Number,
  primaryCategoryCode: String,
  priceDisclaimerNum: String,
  url: String,
  title: String,
  pid: String,
  thumb_image: String,
})

export const Accessories = models.Accessories || model("Accessories", AccessoriesSchema)
