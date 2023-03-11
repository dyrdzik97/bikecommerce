export interface IProductDTO {
  id: number;
  productName: string;
  productDescription: string;
  productDetails: {
    frameSize: string; // 56
    drivetrain: string; // Shimano Dura Ace
    speed: string; // 52/32
    wheel: string; // 28'
    tyres: string; // Continental
    weight: string; // 25
  };
  price: {
    currency: string;
    regularPrice: number;
    promoPrice?: number | null;
    percentageDiscount?: number | null;
  };
  categories: string[];
  images: string[];
  isBestseller: boolean;
  hasFreeShipping: boolean;
  variants?: {
    [key: string]: string[];
    // color: string[];

    // in the future
    // type: string[];
    // size: string[];
  };
}
