import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Page from '../../modules/main/components/LayoutPage/LayoutPage';
import { getProductTiles } from '../../modules/products/mappers';
import { db } from '../../services/firebaseConfig';

const Listing = dynamic(
  () => import('../../modules/products/components/Listing/Listing'),
  {
    ssr: false,
  }
);

const Category = (props: any): JSX.Element => {
  console.warn('prop', props);

  return (
    <Page size='wide'>
      {/* TODO add breadcrumbs */}
      {/* <Listing /> */}
      empty page
    </Page>
  );
};

export const getStaticPaths = async () => {
  const data: any = await getDocs(collection(db, 'products')).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    }
  );

  //   const paths = data.categories.map((category: string) => {
  //     return {
  //       params: {
  //         productslug: data.categories[0],
  //       },
  //     };
  //   });

  //   console.warn({ paths });

  return {
    paths: [
      {
        params: {
          category: 'road',
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale = '', params } = ctx;
  try {
    const [translations] = await Promise.all([
      serverSideTranslations(locale, [
        'common',
        'nav',
        'routes',
        'listing',
        'auth',
      ]),
    ]);

    console.warn(params);

    const data: any = await getDocs(collection(db, 'products')).then(
      (querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      }
    );

    return {
      props: {
        ...translations,
        data: getProductTiles(data),
      },
      revalidate: 1800,
    };
  } catch (e) {
    console.warn(e);

    return {
      notFound: true,
    };
  }
};

export default Category;
