export interface IProductDTO {
  id: string;
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
    price: number;
    promoPrice?: number | null;
    percentageDiscount?: number | null;
  };
  categories: string[];
  images: string[];
  mainImage: string;
  isBestseller: boolean;
  hasFreeShipping: boolean;
  quantity: number;
  availableQuantity?: number;
  //   variants?: {
  //     [key: string]: string[];
  // color: string[];

  // in the future
  // type: string[];
  // size: string[];
  //   };
}

export interface IProductTileDTO {
  productId: string;
  productName: string;
  //   variants?: {
  //     [key: string]: string[];
  //   };
  mainImage: string;
  price: {
    currency: string;
    price: number;
    promoPrice?: number | null;
    percentageDiscount?: number | null;
  };
  isBestseller: boolean;
  hasFreeShipping: boolean;
}
