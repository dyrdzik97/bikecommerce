import { IProductDTO } from '../dto/productDTO';

export const getProducts = (products: IProductDTO[]) => {
  return products.map((product) => {
    return {
      id: product.id,
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
        regularPrice: product.price.regularPrice,
        promoPrice: product.price.promoPrice,
        percentageDiscount: product.price.percentageDiscount,
      },
      categories: product.categories,
      images: product.images,
      isBestseller: product.isBestseller,
      hasFreeShipping: product.hasFreeShipping,
      variants: {
        color: mapColorsVariantToHex(product.variants?.color),
      },
    };
  });
};

export const getProductTiles = (products: IProductDTO[]) => {
  return products.map((product) => {
    return {
      id: product.id,
      productName: product.productName,
      variants: {
        color: mapColorsVariantToHex(product.variants?.color),
      },
      mainImage: product.images[0],
      price: {
        currency: product.price.currency,
        regularPrice: product.price.regularPrice,
        promoPrice: product.price.promoPrice,
        percentageDiscount: product.price.percentageDiscount,
      },
      isBestseller: product.isBestseller,
      hasFreeShipping: product.hasFreeShipping,
    };
  });
};

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
      }
    });

  return colorsArray;
};
