import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Page from '../../modules/main/components/LayoutPage/LayoutPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';
import { db } from '../../services/firebaseConfig';

const Listing = dynamic(
  () => import('../../modules/products/components/Listing/Listing'),
  {
    ssr: false,
  }
);

const Category = (props: any): JSX.Element => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PageLoader />;
  }

  return (
    <Page size='wide'>
      {/* TODO add breadcrumbs */}
      <Listing />
    </Page>
  );
};

export const getStaticPaths = async ({ locales }: any) => {
  const data: any = await getDocs(collection(db, 'products')).then(
    (querySnapshot) => {
      return querySnapshot.docs.map((doc) => doc.data());
    }
  );

  const categories = data.map((item: any) => item.categories[0]);
  const availableCategories = Array.from(new Set(categories));

  const paths = availableCategories
    .map((category: any) => {
      return locales.map((locale: string) => {
        return {
          params: {
            slug: category,
            category: category,
          },
          locale: locale,
        };
      });
    })
    .flat(1);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale = '' } = ctx;
  try {
    const [translations] = await Promise.all([
      serverSideTranslations(locale, [
        'common',
        'nav',
        'routes',
        'listing',
        'auth',
        'product',
        'cart',
      ]),
    ]);

    return {
      props: {
        ...translations,
      },
      revalidate: 1800,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default Category;
