import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useAuth } from '../../../../../context/AuthContext';
import Input from '../../../../ui/components/Inputs/Input/Input';
import Separator from '../../../../ui/components/Separator/Separator';
import { ILoginFormValues } from '../../../models';

const schema = yup.object().shape({
  email: yup.string().email().required('* Email is required.'),
});

const ForgotPasswordPage = () => {
  const { resetPassword, setLoading } = useAuth();
  const { t, i18n } = useTranslation(['auth', 'validations']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: Omit<ILoginFormValues, 'password'>) => {
    try {
      setLoading(true);
      await resetPassword(values.email);
      toast(t('checkYourInbox'), { hideProgressBar: true, type: 'success' });
    } catch (error) {
      toast(t('validations:somethingWentWrong', { ns: 'validations' }), {
        hideProgressBar: true,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='bg-gray-50 m-10 flex min-h-screen items-center justify-center'>
      <div className='bg-gray-100 relative flex max-w-3xl items-center rounded-2xl p-5 shadow-lg'>
        <div className='px-8 md:w-1/2 md:px-8'>
          <h2 className='text-2xl font-bold text-[#002D74]'>
            {t('resetPasswordTitle')}
          </h2>
          <p className='my-4 text-xs text-[#002D74]'>
            {t('resetPasswordSubTitle')}
          </p>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit((values) =>
              onSubmit(values as Omit<ILoginFormValues, 'password'>)
            )}
          >
            <Input
              name={'email'}
              type='email'
              placeholder='Email'
              errors={errors}
              register={register}
            />
            <button
              type='submit'
              className='rounded-xl bg-[#002D74] py-2 text-white duration-300 hover:scale-105'
            >
              {t('resetPasswordTitle')}
            </button>
          </form>
          <Separator label='or' />
          <Link href='/login' className='flex text-center'>
            <div className='w-full rounded-xl border-2 border-[#002D74] bg-white py-2 text-black duration-300 hover:scale-105'>
              {t('login')}
            </div>
          </Link>
        </div>

        <div className='hidden w-1/2 md:block'>
          <img
            className='rounded-2xl'
            src='https://stories.isu.pub/52616697/images/5_original_file_I7.jpg'
          />
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
