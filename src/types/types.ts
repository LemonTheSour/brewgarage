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