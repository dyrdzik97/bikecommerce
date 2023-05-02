import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import LoginPage from '../../modules/main/components/Pages/LoginPage/LoginPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';

const Login = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PageLoader />;
  }

  return <LoginPage />;
};

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  try {
    const [translations] = await Promise.all([
      serverSideTranslations(locale, [
        'common',
        'auth',
        'routes',
        'validations',
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
