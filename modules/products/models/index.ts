export interface IProductTile {
  productId: string;
  title: string;
  href: string;
  categories: string[];
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
  price: number;
  promoPrice?: number;
  percentageDiscount?: number;
}

export interface IProductSkeletonModel {
  productId: string;
  isSkeleton: boolean;
}
