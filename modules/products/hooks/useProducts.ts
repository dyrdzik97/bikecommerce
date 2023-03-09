import useSWRImmutable from 'swr/immutable';
import { getProducts } from '../service/products';

export const useProducts = () => {
  const { data } = useSWRImmutable('products', getProducts);

  return data || [];
};
