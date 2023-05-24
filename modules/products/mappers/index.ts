import { getArrayBasedOnNumber } from '../../../utils/array';
import { IProductDTO } from '../dto/productDTO';
import { Categories } from '../enums';
import { IProductSkeletonModel, IProductTile } from '../models';

export const DEFAULT_LISTING_PER_PAGE = 10;

export const toKebabCase = (name: string): string => {
  const match = name.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );

  if (!match) {
    return '';
  }

  return match.map((phrase) => phrase.toLowerCase()).join('-');
};

export const getProductHref = (name: string, id: number | string): string => {
  if (!name) {
    return '';
  }

  return `product/${toKebabCase(name)}-${id}`;
};

export const getMappedProducts = (products: IProductDTO[]) => {
  return products.map((product) => {
    return {
      productId: product.id,
      productName: product.productName,
      productDescription: product.productDescription,
      productDetails: {
        frameSize: product.productDetails.frameSize,
        drivetrain: product.productDetails.drivetrain,
        speed: product.productDetails.speed,
        wheel: product.productDetails.wheel,
        tyres: product.productDetails.tyres,
        weight: product.productDetails.weight,
      },
      price: {
        currency: product.price.currency,
        price: product.price.price,
        promoPrice: product.price.promoPrice,
        percentageDiscount: product.price.percentageDiscount,
      },
      categories: product.categories,
      images: product.images,
      isBestseller: product.isBestseller,
      hasFreeShipping: product.hasFreeShipping,
      //   variants: {
      //     color: mapColorsVariantToHex(product.variants?.color),
      //   },
      // niebieski-rower?variantId=12434
    };
  });
};

export const getProductTiles = (products: IProductDTO[]): IProductTile[] => {
  // export const getProductTiles = (products: any[]): any[] => {
  return products.map((product) => {
    return {
      productId: product.id || '',
      categories: product.categories,
      href: getProductHref(product.productName, product.id),
      title: product.productName || '',
      //   variants: {
      //     color: mapColorsVariantToHex(product.variants.color),
      //   },
      mainImage: product.images[0] || '',
      price:
        {
          currency: product.price.currency || '',
          price: product.price.price || 0,
          promoPrice: product.price.promoPrice || 0,
          percentageDiscount: product.price.percentageDiscount || 0,
        } || null,
      isBestseller: product.isBestseller || false,
      hasFreeShipping: product.hasFreeShipping || false,
      isSkeleton: false,
    };
  });
};

export const getProductTilesSkeleton = (): IProductTile[] => {
  let skeletonItems: IProductTile[] = [];

  for (let i = 1; i <= 30; i++) {
    skeletonItems.push({
      productId: '',
      title: '',
      href: '',
      categories: [''],
      //   variants: {
      //     color: mapColorsVariantToHex(product.variants.color),
      //   },
      mainImage: '',
      price:
        {
          currency: '',
          price: 0,
          promoPrice: 0,
          percentageDiscount: 0,
        } || null,
      isBestseller: false,
      hasFreeShipping: false,
      isSkeleton: true,
    });
  }

  return skeletonItems;
};

getProductTilesSkeleton;

export const mapColorsVariantToHex = (colors?: string[]) => {
  const colorsArray =
    colors &&
    colors.map((color) => {
      switch (color) {
        case 'blue':
          return {
            text: 'blue',
            color: '#0000FF',
          };
        case 'red':
          return {
            text: 'red',
            color: '#FF0000',
          };
        case 'green':
          return {
            text: 'green',
            color: '#00FF00',
          };
        case 'black':
          return {
            text: 'black',
            color: '#000',
          };
        case 'darkgray':
          return {
            text: 'black',
            color: '#bababa',
          };
      }
    });

  return colorsArray || {};
};

export const getSkeletonPlaceholders = (
  current: number,
  total: number,
  perPage = DEFAULT_LISTING_PER_PAGE
): Array<IProductSkeletonModel> => {
  const number =
    total === 0 || current === 0 || total - current === 0
      ? perPage
      : Math.min(total - current, perPage);

  return getArrayBasedOnNumber(number).map((index) => ({
    productId: index.toString(),
    isSkeleton: true,
  }));
};

export const isProductBelongsToGivenCategory = (
  category?: string | string[] | undefined
) => {
  return Object.values(Categories).includes(category as Categories);
};
