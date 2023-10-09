import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ForgotPasswordPage from '../../modules/main/components/Pages/ForgotPasswordPage/ForgotPasswordPage';

const ForgotPassword = () => {
  return <ForgotPasswordPage />;
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

export default ForgotPassword;
