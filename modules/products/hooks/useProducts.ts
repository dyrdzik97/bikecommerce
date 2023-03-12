import useSWRImmutable from 'swr/immutable';
import { getSkeletonPlaceholders } from '../mappers';
import { getProducts } from '../service/products';

const defaultSkeletonItems = getSkeletonPlaceholders(0, 0);

export const useProducts = () => {
  const { data } = useSWRImmutable('products', getProducts);

  //   if (!data) {
  //     return {
  //       items: defaultSkeletonItems,
  //       pagination: {
  //         total: 0,
  //       },
  //       isLoading: true,
  //     };
  //   }

  return data || [];
};
