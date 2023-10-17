export interface IProductDTO {
  id: string;
  productName: string;
  productDescription: string;
  productDetails: {
    frameSize: string;
    drivetrain: string;
    speed: string;
    wheel: string;
    tyres: string;
    weight: string;
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
  hasFreeDelivery?: boolean;
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
  hasFreeDelivery: boolean;
}
