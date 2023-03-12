export interface IProductTile {
  productName: string;
  variants?: {
    [key: string]: string[];
  };
  mainImage: string;
  price: IPriceModel;
  isBestseller: boolean;
  hasFreeShipping: boolean;
}

export interface IVariantsModel {
  [key: string]: string[];
}

export interface IPriceModel {
  currency: string;
  regularPrice: number;
  promoPrice?: number | null;
  percentageDiscount?: number | null;
}

export interface IProductSkeletonModel {
  productId: number;
  isSkeleton: boolean;
}
