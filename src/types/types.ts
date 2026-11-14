export interface DrinkItem {
  itemTitle: string;
  itemDescription: string;
  itemABV: string;
  priceSmall: string;
  priceLarge: string;
}

export interface DrinkList {
  title: string;
  size1: string;
  size2: string;
  itemList: DrinkItem[];
}

export interface FoodList {
  title: string;
  foodList: { title: string; description: string; price: string }[];
}

export interface Snacks {
  title: string;
  description: string;
  snacks: string[];
}

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface MerchItem {
  title: string;
  price: string;
  img: string;
}

export interface AboutItem {
  img: string;
  imgAlt: string;
  title: string;
  body: string;
}
