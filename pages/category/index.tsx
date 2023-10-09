import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Page from '../../modules/main/components/LayoutPage/LayoutPage';

const Listing = dynamic(
  () => import('../../modules/products/components/Listing/Listing'),
  {
    ssr: false,
  }
);

const Category = (): JSX.Element => {
  return (
    <Page size='wide'>
      {/* TODO add breadcrumbs */}
      <Listing />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
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
        'footer',
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
