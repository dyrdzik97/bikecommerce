import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';
import { IProductDTO } from '../dto/productDTO';

export const useProductSWR = (initialProduct?: IProductDTO) => {
  const router = useRouter();
  const { data } = useSWRImmutable(
    !router.query.product ? null : `product-${router.query.product}`,
    {
      fallbackData: initialProduct,
    }
  );

  return data;
};
