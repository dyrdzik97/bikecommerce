import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import PageLoader from '../modules/ui/components/PageLoader/PageLoader';
import { setCurrentLocale } from '../utils/localeDetection';

const HomePage = dynamic(
  () => import('../modules/main/components/HomePage/HomePage'),
  {
    ssr: false,
  }
);

const Home = (): JSX.Element => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PageLoader />;
  }

  return (
    <SWRConfig>
      <HomePage />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  try {
    setCurrentLocale(locale);

    const [translations] = await Promise.all([
      serverSideTranslations(locale, [
        'common',
        'auth',
        'nav',
        'routes',
        'validations',
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

export default Home;
