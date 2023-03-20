export interface IProductTile {
  productName: string;
  href: string;
  //   variants?: {
  //     [key: string]: string[];
  //   };
  mainImage: string;
  price: IPriceModel;
  isBestseller: boolean;
  hasFreeShipping: boolean;
  isSkeleton: boolean;
}

export interface IVariantsModel {
  [key: string]: string[];
}

export interface IPriceModel {
  currency: string;
  price?: number;
  promoPrice?: number | null;
  percentageDiscount?: number | null;
}

export interface IProductSkeletonModel {
  productId: number;
  isSkeleton: boolean;
}
