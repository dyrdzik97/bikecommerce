import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import Input from '../../../../ui/components/Inputs/Input/Input';
import { deliveryTypes } from '../../../../ui/defaults/deliveries';
import CartPreviewSummaryPanel from '../../Panels/CartPreviewSummaryPanel/CartPreviewSummaryPanel';

const { v4: uuidv4 } = require('uuid');

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
  const { t: tValidation } = useTranslation('validations');

  const schema = yup.object().shape({
    name: nameValidation(tValidation('requiredErrorMessage')),
    surname: surnameValidation(tValidation('requiredErrorMessage')),
    town: townValidation(tValidation('requiredErrorMessage')),
    email: emailValidation(tValidation('incorrectEmailErrorMessage')),
    zipCode: zipCodeValidation(tValidation('incorrectZipCodeErrorMessage')),
  });
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

  useEffect(() => {
    if (deliveryPrice) {
      const index = deliveryTypes.findIndex(
        (item) => item.price === deliveryPrice
      );
      setActiveDelivery(index);
    }
  }, []);

  if (items.length === 0) {
    return <EmptyCartInfo />;
  }

  const getUserData = (field: number) => {
    return (user && user.displayName?.split(' ')[field]) || '';
  };

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
            <div className='bg-gray-100 shadow relative flex rounded-2xl p-5'>
              <div>
                <Input
                  name={'email'}
                  placeholder={t('email')}
                  errors={errors}
                  register={register}
                  label={t('email').toString()}
                  value={user?.email || undefined}
                  required
                />
                <div className='flex flex-row items-start gap-2'>
                  <Input
                    name={'name'}
                    placeholder={t('name')}
                    errors={errors}
                    register={register}
                    label={tCart('userDetails').toString()}
                    value={user?.displayName ? getUserData(0) : undefined}
                    required
                  />
                  <Input
                    name={'surname'}
                    placeholder={t('surname')}
                    errors={errors}
                    register={register}
                    label='&nbsp;'
                    value={user?.displayName ? getUserData(1) : undefined}
                    required
                  />
                </div>
                <Input
                  name={'street'}
                  placeholder={tCart('street')}
                  errors={errors}
                  register={register}
                  label={tCart('deliveryAddress').toString()}
                  required
                />
                <div className='flex flex-row items-start gap-2'>
                  <Input
                    name={'buildingNumber'}
                    placeholder={tCart('buildingNumber')}
                    errors={errors}
                    register={register}
                    className='w-40'
                    required
                  />
                  <Input
                    name={'flatNumber'}
                    placeholder={tCart('flatNumber')}
                    errors={errors}
                    register={register}
                    className='w-60'
                  />
                </div>
                <div className='flex flex-row items-start gap-2'>
                  <Input
                    name={'zipCode'}
                    placeholder={tCart('zipCode')}
                    errors={errors}
                    register={register}
                    className='w-40'
                    maxLength={6}
                    required
                  />
                  <Input
                    name={'town'}
                    placeholder={tCart('town')}
                    errors={errors}
                    register={register}
                    className='w-60'
                    required
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='font-medium'>
                    {tCart('deliveryMethods')}
                  </label>
                  {deliveryError && (
                    <p className='text-primary-100'>
                      {tValidation('chooseDelivery')}
                    </p>
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
        <div className='bg-gray-100 w-100 relative flex h-[100%] max-w-xl flex-col items-center rounded-2xl p-5 shadow-custom sm:min-w-[40%]'>
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
