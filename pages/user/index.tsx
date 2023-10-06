import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import UserPage from '../../modules/main/components/Pages/UserPage/UserPage';
import PageLoader from '../../modules/ui/components/PageLoader/PageLoader';
import { IOrderProps } from '../../modules/ui/models';
import { db } from '../../services/firebaseConfig';

interface IThankYouProps {
  orders: IOrderProps[];
}

const ThankYou = ({ orders }: IThankYouProps) => {
  const { isFallback } = useRouter();
  const { user } = useAuth();

  let currentUserOrders = [];

  currentUserOrders = orders.filter((order) => order.userId === user?.uid);
  console.warn(currentUserOrders, orders, user?.uid);

  if (isFallback) {
    return <PageLoader />;
  }

  return <UserPage orders={currentUserOrders} />;
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

export default ThankYou;
