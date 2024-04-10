import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import PageSeo from '../../modules/main/components/PageSeo/PageSeo';
import UserPage from '../../modules/main/components/Pages/UserPage/UserPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';
import { IOrderProps } from '../../modules/ui/models';
import { db } from '../../services/firebaseConfig';

interface IUserProps {
  orders: IOrderProps[];
}

const User = ({ orders }: IUserProps) => {
  const { push, isFallback } = useRouter();
  const { user } = useAuth();
  const { t } = useTranslation('routes');

  const [currentUserOrders, setCurrentUserOrders] =
    useState<IOrderProps[]>(orders);

  const userLoggedIn: boolean = user?.uid !== undefined;

  useEffect(() => {
    if (!userLoggedIn) {
      push(`/${t('login')}?redirect=${t('userProfile')}`);
    } else {
      push(`/${t('userProfile')}`);
    }
  }, [t, userLoggedIn]);

  useEffect(() => {
    const userOrders = orders.filter((order) => order.userId === user?.uid);
    setCurrentUserOrders(userOrders);
  }, [orders]);

  if (isFallback || !userLoggedIn) {
    return <PageLoader />;
  }

  return (
    <>
      <PageSeo title={t('userProfile')} />
      <UserPage orders={currentUserOrders} />
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

    const orders = await getDocs(collection(db, 'orders')).then(
      (querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      }
    );

    return {
      props: {
        orders,
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

export default User;
