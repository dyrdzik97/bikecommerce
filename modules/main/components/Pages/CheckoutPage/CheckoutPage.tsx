import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../../../../context/AuthContext';
import { useCart } from '../../../../../context/CartContext';
import ProductPreview from '../../../../products/components/ProductPreview/ProductPreview';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Input from '../../../../ui/components/Inputs/Input/Input';
import Separator from '../../../../ui/components/Separator/Separator';
import CartPreviewSummaryPanel from '../../Panels/CartPreviewSummaryPanel/CartPreviewSummaryPanel';

const CheckoutPage = () => {
  const { items, totalPrice } = useCart();
  const { user } = useAuth();
  const { t: tValidations } = useTranslation('validations');
  console.warn(items, user);

  const schema = yup.object().shape({
    // TODO stringValidation("Name", minLength)
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
    _email: yup.string().email().required('* Email is required.'),
    get email() {
      return this._email;
    },
    set email(value) {
      this._email = value;
    },
    password: yup
      .string()
      .required(`${tValidations('requiredErrorMessage')}`)
      .min(8, `${tValidations('incorrectEmailErrorMessage')}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation('auth');
  return (
    <div className='flex w-full flex-row justify-center gap-10 p-20'>
      <div className='relative flex items-center'>
        <section className='bg-gray-50 m-10 flex min-h-screen items-center justify-center'>
          <div className='bg-gray-100 relative flex max-w-3xl items-center rounded-2xl p-5 shadow'>
            <div>
              <form className='flex flex-col gap-4' onSubmit={() => {}}>
                <Input
                  name={'name'}
                  placeholder={t('name')}
                  errors={errors}
                  register={register}
                />
                <Input
                  name={'surname'}
                  placeholder={t('surname')}
                  errors={errors}
                  register={register}
                />
                <Input
                  name={'email'}
                  type='email'
                  placeholder={t('email')}
                  errors={errors}
                  register={register}
                />
                <div className='h-full relative flex w-full items-center'>
                  <Input
                    name={'password'}
                    type={'text'}
                    placeholder={t('password')}
                    errors={errors}
                    register={register}
                    inputClassName={'pr-12'}
                  />
                </div>
                <GenericButton label='Register' type='submit' filled />
              </form>
              <Separator className='mt-10' />
            </div>
          </div>
        </section>
      </div>
      <div className='bg-gray-100 h-full relative relative flex w-[40%] max-w-3xl flex-col items-center rounded-2xl p-5 shadow'>
        {items.map((item) => {
          return <ProductPreview {...item} key={`key-${item.id}`} />;
        })}

        <CartPreviewSummaryPanel total={totalPrice} className='relative' />
      </div>
    </div>
  );
};

export default CheckoutPage;
