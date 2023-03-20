import { FC } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';

import { collection, getDocs } from 'firebase/firestore';
import { IProductDTO } from '../../modules/products/dto/productDTO';
import { useProductSWR } from '../../modules/products/hooks/useProductSWR';
import { getProductHref } from '../../modules/products/mappers';
import { db } from '../../services/firebaseConfig';

interface IProductProps {
  product: IProductDTO;
}

const Product: FC<IProductProps> = ({ product }) => {
  useProductSWR(product);

  const { isFallback, query } = useRouter();

  if (isFallback) {
    // return <PageLoader />;
    return <p>loading</p>;
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
      <p>{JSON.stringify(product)}</p>
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
  const { params = {} } = ctx;

  try {
    const data = await getDocs(collection(db, 'products')).then(
      (querySnapshot) => {
        console.warn(querySnapshot);

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
