import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCart } from '../../../../../context/CartContext';
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

const schema = yup.object().shape({
  name: nameValidation,
  surname: surnameValidation,
  town: townValidation,
  email: emailValidation,
  zipCode: zipCodeValidation,
});

const CheckoutPage = () => {
  const { items, totalPrice, setDeliveryPrice, deliveryPrice } = useCart();
  const [activeDelivery, setActiveDelivery] = useState<{}>();
  const [deliveryError, setDeliveryError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { t } = useTranslation('auth');
  const { t: tCart } = useTranslation('cart');

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
  }

  const onSubmit = (data?: any) => {
    if (activeDelivery !== undefined) {
      setIsLoading(true);
      useToStripePayment(items)
        .then((req: any) => {
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
      className='mb-5 flex w-full flex-col gap-4'
      onSubmit={handleSubmit((values) => onSubmit(values as any))}
    >
      <div className='flex w-full flex-row justify-center gap-10 p-20'>
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
                  label='Shipping adress'
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
        <div className='bg-gray-100 relative flex h-[100%] w-[40%] max-w-3xl flex-col items-center rounded-2xl p-5 shadow'>
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
