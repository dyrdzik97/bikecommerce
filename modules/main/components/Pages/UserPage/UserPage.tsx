import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useAuth } from '../../../../../context/AuthContext';
import OrderTile from '../../../../products/components/OrderTile/OrderTile';
import InfoText from '../../../../ui/components/InfoText/InfoText';
import { IOrderProps } from '../../../../ui/models';

interface IUserPageProps {
  orders: IOrderProps[];
}

const UserPage = ({ orders }: IUserPageProps) => {
  const { t } = useTranslation('thankyou');
  const { t: tAuth } = useTranslation('auth');
  const { t: tRoutes } = useTranslation('routes');
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    return (
      <InfoText
        content={tAuth('notLoggedInUserInfo')}
        hasButton
        buttonTitle={tRoutes('login')}
        onClick={() => {
          router.push(`/${tRoutes('login')}?redirect=account`);
        }}
      />
    );
  }

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto'>
        <div className='no-wrap md:-mx-2 md:flex '>
          <div className='w-full md:mx-2 md:w-3/12'>
            <div className='flex flex-row items-start justify-between pb-2 text-3xl font-bold'>
              {t('myAccount')}
            </div>
            <div className='border-green-400 gap-4 border-t-4 bg-white'>
              <div className='image'>
                <img
                  className='h-auto mx-auto w-full'
                  src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                  alt=''
                />
              </div>
              <h1 className='text-gray-900 my-1 text-xl font-bold leading-8'>
                {user?.displayName}
              </h1>
              <h3 className='text-gray-600 font-lg text-semibold leading-6'>
                {user.email}
              </h3>
            </div>
          </div>
          <div className='h-64 mx-2 md:w-9/12'>
            <div className='shadow-m rounded-md bg-white px-3'>
              <div className='text-gray-900 flex items-center space-x-2 font-semibold leading-8'>
                <span className='tracking-wide'>{t('myOrders')}</span>
              </div>
              <div>
                {!orders.length ? (
                  <p className='mt-5'>{t('noOrders')}</p>
                ) : (
                  orders.map((order) => (
                    <OrderTile
                      orderId={order.id}
                      paymentStatus={order.paymentStatus}
                      items={order.items}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
