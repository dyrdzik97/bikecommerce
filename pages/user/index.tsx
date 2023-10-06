import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import UserPage from '../../modules/main/components/Pages/UserPage/UserPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';

const ThankYou = () => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PageLoader />;
  }

  return <UserPage />;
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

export default ThankYou;
