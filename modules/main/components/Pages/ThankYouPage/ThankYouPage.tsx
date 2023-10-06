import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useAuth } from '../../../../../context/AuthContext';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import IconFailed from '../../../utils/Icons/IconFailed/IconFailed';
import IconSuccess from '../../../utils/Icons/IconSuccess/IconSuccess';

const ThankYouPage = () => {
  const { t } = useTranslation('routes');
  const { t: tCart } = useTranslation('cart');
  const { t: tThankYou } = useTranslation('thankyou');
  const router = useRouter();
  const { user } = useAuth();

  const paymentFailed: boolean = router.query.status === 'fail';

  return (
    <div className='bg-gray-100 flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center bg-white p-6 md:mx-auto'>
        {paymentFailed ? (
          <IconFailed width={64} height={64} />
        ) : (
          <IconSuccess width={16} height={16} />
        )}
        <div className='text-center'>
          <h3 className='text-gray-900 text-center text-base font-semibold md:text-2xl'>
            {tThankYou(paymentFailed ? 'paymentFailed' : 'paymentSuccess')}
          </h3>
          <p className='text-gray-600 my-2'>
            {tThankYou(
              paymentFailed ? 'paymentFailedInfo' : 'paymentSuccessInfo'
            )}
          </p>
          {router.query.order && (
            <span>
              {tCart('orderNumber')}{' '}
              {/* TODO add link to orders in user profile */}
              <p className='underline'>{router.query.order}</p>
            </span>
          )}
          {user?.uid && (
            <div className='flex items-center justify-center py-10 text-center text-[#000]'>
              <GenericButton
                label={tThankYou('myOrders')}
                size='small'
                filled
                linkButton
                href={`/${t('userProfile')}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
