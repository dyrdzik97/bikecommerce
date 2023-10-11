import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Page from '../../modules/main/components/LayoutPage/LayoutPage';

const Listing = dynamic(
  () => import('../../modules/products/components/Listing/Listing'),
  {
    ssr: false,
  }
);

const Category = (): JSX.Element => {
  const { t } = useTranslation('listing');
  return (
    <Page size='wide'>
      <Head>
        <title>Bikecommerce - {t('allProducts')}</title>
      </Head>
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
