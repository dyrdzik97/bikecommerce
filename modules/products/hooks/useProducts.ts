import useSWRImmutable from 'swr/immutable';
import { getProductTilesSkeleton } from '../mappers';
import { getProductsFromDatabase } from '../service/products';

export const useProducts = (category?: string | string[] | undefined) => {
  const { data } = useSWRImmutable(['products', category], () =>
    getProductsFromDatabase(category)
  );

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
