import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import PageSeo from '../../modules/main/components/PageSeo/PageSeo';
import ThankYouPage from '../../modules/main/components/Pages/ThankYouPage/ThankYouPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';

const ThankYou = () => {
  const { isFallback } = useRouter();
  const { t } = useTranslation('thankyou');

  if (isFallback) {
    return <PageLoader />;
  }

  return (
    <>
      <PageSeo title={t('thankYouSeoTitle')} />
      <ThankYouPage />
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
        'thankyou',
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

export default ThankYou;
