import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../../../../context/AuthContext';
import { useCart } from '../../../../../context/CartContext';
import createOrder from '../../../../../services/order';
import useToStripePayment from '../../../../../services/stripe';
import {
  emailValidation,
  nameValidation,
  surnameValidation,
  townValidation,
  zipCodeValidation,
} from '../../../../../utils/validation';
import ProductPreview from '../../../../products/components/ProductPreview/ProductPreview';
import DeliveryCard from '../../../../ui/components/DeliveryCard/DeliveryCard';
import EmptyCartInfo from '../../../../ui/components/EmptyCartInfo/EmptyCartInfo';
import InfoText from '../../../../ui/components/InfoText/InfoText';
import Input from '../../../../ui/components/Inputs/Input/Input';
import { deliveryTypes } from '../../../../ui/defaults/deliveries';
import CartPreviewSummaryPanel from '../../Panels/CartPreviewSummaryPanel/CartPreviewSummaryPanel';

const { v4: uuidv4 } = require('uuid');

const schema = yup.object().shape({
  name: nameValidation,
  surname: surnameValidation,
  town: townValidation,
  email: emailValidation,
  zipCode: zipCodeValidation,
});

const CheckoutPage = () => {
  const { items, totalPrice, setDeliveryPrice, deliveryPrice } = useCart();
  const { user } = useAuth();
  const [activeDelivery, setActiveDelivery] = useState<number>();
  const [deliveryError, setDeliveryError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { t } = useTranslation('auth');
  const { t: tCart } = useTranslation('cart');
  const { t: tRoutes } = useTranslation('routes');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onActivateDelivery = (index: number, deliveryPrice: number) => {
    setActiveDelivery(index);
    setDeliveryPrice(deliveryPrice);
    setDeliveryError(false);
  };

  if (items.length === 0) {
    return <EmptyCartInfo />;
  } else if (user === null) {
    return (
      <InfoText
        content={t('notLoggedInUserInfo')}
        hasButton
        buttonTitle={t('login')}
        onClick={() => {
          router.push(`/${tRoutes('login')}?redirect=checkout`);
        }}
      />
    );
  }

  const onSubmit = async () => {
    const orderId = uuidv4();

    if (activeDelivery !== undefined) {
      setIsLoading(true);
      await createOrder({
        id: orderId,
        userId: user?.uid || `guest-${uuidv4()}`,
        items,
        paymentStatus: 'processing',
      });
      await useToStripePayment(orderId, items)
        .then((req) => {
          router.push(req.url);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setDeliveryError(true);
    }
  };

  return (
    <form
      className='mb-5 w-full gap-4'
      onSubmit={handleSubmit(() => onSubmit())}
    >
      <div className='flex w-full flex-col justify-center gap-10 p-0 sm:flex-row sm:p-20'>
        <div className='h-fit relative flex'>
          <section className='bg-gray-50 h-fit flex w-full justify-center'>
            <div className='bg-gray-100 relative flex rounded-2xl p-5 shadow'>
              <div>
                <Input
                  name={'email'}
                  placeholder={t('email')}
                  errors={errors}
                  register={register}
                  label='Email adress'
                  value={user?.email || undefined}
                />
                <div className='flex flex-row items-end gap-2'>
                  <Input
                    name={'name'}
                    placeholder={t('name')}
                    errors={errors}
                    register={register}
                    label='User details'
                  />
                  <Input
                    name={'surname'}
                    placeholder={t('surname')}
                    errors={errors}
                    register={register}
                  />
                </div>
                <Input
                  name={'street'}
                  placeholder={tCart('street')}
                  errors={errors}
                  register={register}
                  label='Delivery adress'
                />
                <div className='flex flex-row items-end gap-2'>
                  <Input
                    name={'buildingNumber'}
                    placeholder={tCart('buildingNumber')}
                    errors={errors}
                    register={register}
                    className='w-40'
                  />
                  <Input
                    name={'flatNumber'}
                    placeholder={tCart('flatNumber')}
                    errors={errors}
                    register={register}
                    className='w-60'
                  />
                </div>
                <div className='flex flex-row items-end gap-2'>
                  <Input
                    name={'zipCode'}
                    placeholder={tCart('zipCode')}
                    errors={errors}
                    register={register}
                    className='w-40'
                    maxLength={6}
                  />
                  <Input
                    name={'town'}
                    placeholder={tCart('town')}
                    errors={errors}
                    register={register}
                    className='w-60'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='font-medium'>Delivery methods</label>
                  {deliveryError && (
                    <p className='text-primary-100'>Choose delivery method</p>
                  )}
                  {deliveryTypes.map((item, index) => (
                    <DeliveryCard
                      key={`${item.type}-${index}`}
                      type={item.type}
                      details={item.details}
                      price={item.price}
                      onClick={() =>
                        onActivateDelivery(
                          index,
                          item.promoPrice ? item.promoPrice : item.price
                        )
                      }
                      isDeliveryActive={activeDelivery === index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='bg-gray-100 w-100 relative flex h-[100%] max-w-xl flex-col items-center rounded-2xl p-5 shadow sm:min-w-[40%]'>
          {items.map((item) => {
            return <ProductPreview {...item} key={`key-${item.id}`} />;
          })}
          <CartPreviewSummaryPanel
            total={totalPrice}
            deliveryPrice={deliveryPrice}
            className='relative'
            onClickButtonLabel={tCart('pay')}
            isLoading={isLoading}
          />
        </div>
      </div>
    </form>
  );
};

export default CheckoutPage;
