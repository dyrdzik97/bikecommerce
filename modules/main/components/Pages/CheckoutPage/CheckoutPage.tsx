import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../../../../context/AuthContext';
import { useCart } from '../../../../../context/CartContext';
import ProductPreview from '../../../../products/components/ProductPreview/ProductPreview';
import DeliveryCard from '../../../../ui/components/DeliveryCard/DeliveryCard';
import EmptyCartInfo from '../../../../ui/components/EmptyCartInfo/EmptyCartInfo';
import Input from '../../../../ui/components/Inputs/Input/Input';
import { deliveryTypes } from '../../../../ui/defaults/deliveries';
import CartPreviewSummaryPanel from '../../Panels/CartPreviewSummaryPanel/CartPreviewSummaryPanel';

const CheckoutPage = () => {
  const { items, totalPrice, setDeliveryPrice, deliveryPrice } = useCart();
  const { user } = useAuth();
  const [activeDelivery, setActiveDelivery] = useState<{}>();

  const { t: tValidations } = useTranslation('validations');

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(`${tValidations('requiredErrorMessage')}`)
      .min(
        2,
        `${tValidations('minCharactersNumberErrorMessage', { number: 2 })}`
      ),
    surname: yup
      .string()
      .required(`${tValidations('requiredErrorMessage')}`)
      .min(
        2,
        `${tValidations('minCharactersNumberErrorMessage', { number: 2 })}`
      ),
    town: yup.string().required(`${tValidations('requiredErrorMessage')}`),
    buildingNumber: yup
      .number()
      .required(`${tValidations('requiredErrorMessage')}`)
      .min(
        1,
        `${tValidations('minCharactersNumberErrorMessage', { number: 1 })}`
      ),
    flatNumber: yup
      .string()
      .required(`${tValidations('requiredErrorMessage')}`)
      .min(
        1,
        `${tValidations('minCharactersNumberErrorMessage', { number: 1 })}`
      ),
    email: yup.string().email().required('* Email is required.'),
    zipCode: yup
      .string()
      .required('Zipcode is a required field')
      .matches(/^\d{2}(?:[-\s]\d{3})?$/, 'Invalid zipcode format'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation('auth');
  const { t: tCart } = useTranslation('cart');

  const onSubmit = (data: any) => {
    console.warn('data', data);
  };

  const onActivateDelivery = (index: number, deliveryPrice: number) => {
    setActiveDelivery(index);
    setDeliveryPrice(deliveryPrice);
  };

  if (items.length === 0) {
    return <EmptyCartInfo />;
  }

  return (
    <div className='flex w-full flex-row justify-center gap-10 p-20'>
      <div className='h-fit relative flex'>
        <section className='bg-gray-50 h-fit flex w-full justify-center'>
          <div className='bg-gray-100 relative flex rounded-2xl p-5 shadow'>
            <div>
              <form
                className='mb-5 flex w-full flex-col gap-4'
                onSubmit={handleSubmit((values) => onSubmit(values as any))}
              >
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
              </form>
              <div className='flex flex-col'>
                <label className='font-medium'>Delivery methods</label>
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
          onClick={() => console.warn('stripe payment')}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
