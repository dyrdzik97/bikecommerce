export interface IProductTile {
    productName: string;
    variants?: {
        [key: string]: string[];
    };
    mainImage: string;
    regularPrice: number;
    promoPrice: number;
    percentageDiscount: number;
    isBestseller: boolean;
    hasFreeShipping: boolean;
}
