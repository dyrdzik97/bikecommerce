import { useTranslation } from 'next-i18next';
import { useAuth } from '../../../../../context/AuthContext';
import OrderTile from '../../../../products/components/OrderTile/OrderTile';
import { IOrderProps } from '../../../../ui/models';

interface IUserPageProps {
  orders: IOrderProps[];
}

const UserPage = ({ orders }: IUserPageProps) => {
  const { t } = useTranslation('thankyou');
  const { user } = useAuth();

  return (
    <div className='bg-gray-100 p-2'>
      <div className='container mx-auto'>
        <div className='no-wrap gap-5 px-2 md:-mx-2 md:flex'>
          <div className='w-full md:mx-2 md:w-3/12'>
            <div className='flex flex-row items-start justify-between text-3xl font-bold'>
              {t('myAccount')}
            </div>
            <div className='gap-4 border-t-4 bg-white'>
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
                {user?.email}
              </h3>
            </div>
          </div>
          <div className='h-64 md:w-9/12'>
            <div className='shadow-m rounded-md bg-white'>
              <div className='text-gray-900 mt-5 flex items-center space-x-2 font-semibold leading-8'>
                <span className='px-2 tracking-wide'>{t('myOrders')}</span>
              </div>
              <div>
                {!orders.length ? (
                  <p className='mt-5'>{t('noOrders')}</p>
                ) : (
                  orders.map((order, index) => (
                    <OrderTile
                      key={`${order.id}`}
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
