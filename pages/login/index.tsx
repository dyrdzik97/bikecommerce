import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import PageSeo from '../../modules/main/components/PageSeo/PageSeo';
import LoginPage from '../../modules/main/components/Pages/LoginPage/LoginPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';

const Login = () => {
  const { isFallback } = useRouter();
  const { t } = useTranslation('auth');

  if (isFallback) {
    return <PageLoader />;
  }

  return (
    <>
      <PageSeo title={t('login')} />
      <LoginPage />
    </>
  );
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

export default Login;
