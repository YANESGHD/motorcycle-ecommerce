export interface Section {
  key: string;
  label: string
};

interface ColorOption {
  productCode: string;
  colorCode: string;
  colorName: string;
  displayColorName: string;
  defaultColor: boolean;
  hex1: string;
  hex2: string;
  thumbnailImageUrl: string;
  basePrice: number;
  basePriceFormatted: string;
  additionalPrice: number;
  additionalPriceFormatted: string;
}

interface Trim {
  productCode: string;
  colorCode: string;
  trimCode: string;
  displayTrimName: string;
  defaultTrim: boolean;
  trimHex1: string;
  trimHex2: string;
  thumbnailImageUrl: string;
  basePrice: number;
  basePriceFormatted: string;
  additionalPrice: number;
  additionalPriceFormatted: string;
}

export interface Motorcycle {
  baseProductCode: string;
  name: string;
  financialDisclaimer: string;
  formattedName: string;
  description: string;
  modelYear: number;
  modelCode: string;
  modelFamily: string;
  categoryCode: string;
  categoryName: string;
  parentCategoryCode: string;
  parentCategoryName: string;
  url: string;
  primaryImageThumbnailUrl: string;
  navigationImageUrl: string;
  price: number;
  priceFormatted: string;
  monthlyPrice: number;
  monthlyPriceFormatted: string;
  priceDisclaimerNumber: number;
  colorOptions: ColorOption[];
  trim: Trim[];
  colors: ColorOption[];
}

export interface Accessory {
  price: number;
  retailPriceFormatted: string;
  primaryThumbnailUrl: string;
  priceFormatted: string;
  badges: string[];
  baseProductCode: string;
  pdpProductUrl: string;
  formattedName: string;
  superCategoryCodes: string[];
  primaryCategoryName: string;
  productOptions: string[];
  hoverThumbnailUrl: string;
  numberOfReviews: number;
  name: string;
  retailPrice: number;
  averageRating: number;
  primaryCategoryCode: string;
  priceDisclaimerNum: string;
  url: string;
  title: string;
  pid: string;
  thumb_image: string;
  description?: string;
}
