import useSWRImmutable from 'swr/immutable';
import { getProductTilesSkeleton } from '../mappers';
import { getProducts } from '../service/products';

export const useProducts = () => {
  const { data } = useSWRImmutable('products', () => getProducts());

  // filling database
  // addDoc(collection(db, 'products'), productsMock[5]);

  if (!data) {
    return {
      items: getProductTilesSkeleton(),
      isLoading: true,
    };
  }

  return {
    ...data,
    isLoading: false,
  };
};
