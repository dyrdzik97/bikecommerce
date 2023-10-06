export interface IProductTile {
  id: string;
  productName: string;
  href: string;
  categories: string[];
  //   variants?: {
  //     [key: string]: string[];
  //   };
  mainImage: string;
  price: IPriceModel;
  isBestseller: boolean;
  hasFreeDelivery: boolean;
  isSkeleton: boolean;
}

export interface IVariantsModel {
  [key: string]: string[];
}

export interface IPriceModel {
  currency?: string;
  price: number | undefined | string;
  promoPrice?: number;
  percentageDiscount?: number;
}

export interface IProductSkeletonModel {
  productId: string;
  isSkeleton: boolean;
}
