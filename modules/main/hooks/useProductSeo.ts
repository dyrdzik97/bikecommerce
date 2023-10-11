import { useMemo } from 'react';
import { stripHtmlTags } from '../../../utils/stripHtmlTags';
import { useProductSWR } from '../../products/hooks/useProductSWR';
import { toKebabCase } from '../../products/mappers';

export const useProductSeo = () => {
  const product = useProductSWR();

  return useMemo(() => {
    if (!product) {
      return {
        id: -1,
        description: '',
        ogDescription: '',
        name: '',
        photosUrls: [],
        price: 0,
        currency: '',
        offerUrl: '',
      };
    }

    console.warn({ product });

    const condition = 'NewCondition';

    return {
      id: product.id,
      name: product.productName,
      description: product.productDescription,
      ogDescription: stripHtmlTags(product.description || '').replace(
        /&nbsp;/g,
        ' '
      ),
      photosUrls: product.mainImage,
      price: product.price.promoPrice
        ? product.price.promoPrice
        : product.price.regular,
      // TODO change currency in future
      currency: 'PLN',
      offerUrl: `https://${process.env.URL}/${toKebabCase(
        `${product.productName || ''}`
      )}-${product.id}`,
      category: product.categories[0] || '',
      itemCondition: `https://schema.org/${condition}`,
      // in future change availability for live value from database and stock count
      availability: `https://schema.org/InStock}`,
    };
  }, [product]);
};
