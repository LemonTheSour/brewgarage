export interface MenuBlock {
    "title": string;
    "size1": string;
    "size2": string,
    "itemList": {
        "itemTitle": string,
        "itemDescription": string,
        "itemABV": string,
        "priceSmall": string,
        "priceLarge": string
    }[]
}

export interface Pricecard {
    "itemTitle": string;
    "itemDescription": string;
    "itemABV": string;
    "priceSmall": string;
    "priceLarge": string;
}

export interface Foodlist {
    "title": string,
    "foodList": {
        "title": string,
        "description" : string,
        "price": string
    }[]
}

export interface Snacks {
    "title": string,
    "description": string;
    "snacks": string[];
}

export interface ContactForm {
    "firstName": string,
    "lastName": string,
    "email": string,
    "phone": string,
    "message": string
}