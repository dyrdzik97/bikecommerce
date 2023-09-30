import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CheckoutPage from '../../modules/main/components/Pages/CheckoutPage/CheckoutPage';

const Checkout = () => {
  return <CheckoutPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  try {
    const [translations] = await Promise.all([
      serverSideTranslations(locale, [
        'common',
        'auth',
        'routes',
        'validations',
        'nav',
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

export default Checkout;
