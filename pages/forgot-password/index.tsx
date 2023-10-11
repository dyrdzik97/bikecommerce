import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageSeo from '../../modules/main/components/PageSeo/PageSeo';
import ForgotPasswordPage from '../../modules/main/components/Pages/ForgotPasswordPage/ForgotPasswordPage';

const ForgotPassword = () => {
  const { t } = useTranslation('auth');

  return (
    <>
      <PageSeo title={t('remindMe')} />
      <ForgotPasswordPage />
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

export default ForgotPassword;
