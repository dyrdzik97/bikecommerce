import { FC } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';

import { collection, getDocs } from 'firebase/firestore';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ProductPage from '../../modules/products/components/Pages/ProductPage/ProductPage';
import { IProductDTO } from '../../modules/products/dto/productDTO';
import { useProductSWR } from '../../modules/products/hooks/useProductSWR';
import { getProductHref } from '../../modules/products/mappers';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';
import { db } from '../../services/firebaseConfig';

interface IProductProps {
  product: IProductDTO;
}

const Product: FC<IProductProps> = ({ product }) => {
  useProductSWR(product);

  const { isFallback, query } = useRouter();

  if (isFallback) {
    return <PageLoader />;
  }

  return (
    <SWRConfig
      value={{
        fallback: {
          [`product-${query.product}`]: product,
        },
      }}
    >
      {/* <ProductContextProvider> */}

      {/* <MobileView>
          <ProductMobilePage />
        </MobileView>
        <BrowserView>
          <ProductPage />
        </BrowserView> */}
      <ProductPage product={product} key={product.id} />
    </SWRConfig>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params = {}, locale = '' } = ctx;

  try {
    const [translations] = await Promise.all([
      serverSideTranslations(locale, ['common', 'nav', 'routes', 'listing']),
    ]);

    const data = await getDocs(collection(db, 'products')).then(
      (querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      }
    );

    const product = data.filter((offer) => {
      const offerUrl = getProductHref(offer.productName, offer.id).substring(1);
      return offerUrl === params.product;
    })[0];

    return {
      props: {
        product,
        ...translations,
      },
      // simulate loading of page - remove to being faster
      revalidate: 1800,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Product;
