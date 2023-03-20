import useSWRImmutable from 'swr/immutable';
import { getProductTilesSkeleton } from '../mappers';
import { getProducts } from '../service/products';

export const useProducts = () => {
  const { data } = useSWRImmutable('products', () => getProducts());

  if (!data) {
    return {
      // items: getProductTiles({})
      items: getProductTilesSkeleton(), // defaultSkeletonItems, // getProducttileskeleton
      //   pagination: {
      //     total: 0,
      //   },
      isLoading: true,
    };
  }

  return {
    ...data,
    isLoading: false,
  };
};
