import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageSeo from '../../modules/main/components/PageSeo/PageSeo';
import RegisterPage from '../../modules/main/components/Pages/RegisterPage/RegisterPage';

const Register = () => {
  const { t } = useTranslation('auth');
  return (
    <>
      <PageSeo title={t('register')} />
      <RegisterPage />
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

export default Register;
