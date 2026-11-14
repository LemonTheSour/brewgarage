// Shapes of the site content in src/data/*.json.
// Components take these as props, so a typo in a data file fails the build.

export interface DrinkItem {
  itemTitle: string;
  itemDescription: string;
  itemABV: string;
  priceSmall: string;
  priceLarge: string;
}

/** A drinks section (beer, red wine…) with two serve sizes. */
export interface DrinkMenu {
  title: string;
  size1: string;
  size2: string;
  itemList: DrinkItem[];
}

export interface FoodMenu {
  title: string;
  foodList: { title: string; description: string; price: string }[];
}

export interface SnackMenu {
  title: string;
  description: string;
  snacks: string[];
}

export interface MerchItem {
  title: string;
  price: string;
  image: string;
}

export interface AboutItem {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface JobListing {
  title: string;
  body: string;
}

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

/** A photo card on the home page linking to another page. */
export interface FeatureItem {
  title: string;
  blurb: string;
  image: string;
  link: string;
}
