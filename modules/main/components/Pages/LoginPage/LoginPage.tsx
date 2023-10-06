import { yupResolver } from '@hookform/resolvers/yup';
import { initializeApp } from 'firebase/app';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useAuth } from '../../../../../context/AuthContext';
import { firebaseConfig } from '../../../../../services/firebaseConfig';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Input from '../../../../ui/components/Inputs/Input/Input';
import Separator from '../../../../ui/components/Separator/Separator';
import { ILoginFormValues } from '../../../models';
import IconEye from '../../../utils/Icons/IconEye/IconEye';
import IconGoogle from '../../../utils/Icons/IconGoogle/IconGoogle';

// utils
// validations
// index.ts
// const emailValidation = (message: string) => yup
// .string()
// .email()
// .required(message)
// }

// https://react.i18next.com/latest/usetranslation-hook#usetranslation-params
// load a specific namespace
// the t function will be set to that namespace as default
// const { t, i18n } = useTranslation('ns1');
// t('key'); // will be looked up from namespace ns1

// load multiple namespaces
// the t function will be set to first namespace as default
// const { t, i18n } = useTranslation(['ns1', 'ns2', 'ns3']);
// t('key'); // will be looked up from namespace ns1
// t('key', { ns: 'ns2' }); // will be looked up from namespace ns2

// zagniezdzone
// https://stackoverflow.com/questions/57691637/react-i18next-why-arent-my-nested-keys-working

const LoginPage = () => {
  const { signIn, signInWithGoogle, loading } = useAuth();
  const router = useRouter();
  const { t, i18n } = useTranslation(['auth', 'routes']);
  const [passwordShown, setPasswordShown] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(`${t('validations:requiredErrorMessage')}`),
    password: yup
      .string()
      .required(`${t('validations:requiredErrorMessage')}`)
      .min(8, `${t('validations:incorrectEmailErrorMessage')}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginFormValues) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        toast(t('loginSuccess'), {
          hideProgressBar: true,
          type: 'success',
        });
      })
      .catch((error) => {
        toast(t('validations:somethingWentWrong'), {
          hideProgressBar: true,
          type: 'error',
        });
      })
      .finally(() => {
        if (router.query.redirect) {
          router.push(`/${t('checkout')}`);
        }
      });
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return (
    <section className='bg-gray-50 m-10 flex min-h-screen items-center justify-center'>
      <div className='bg-gray-100 relative flex max-w-3xl items-center rounded-2xl p-5 shadow-lg'>
        <div className='px-8 md:w-1/2 md:px-8'>
          <h2 className='text-2xl font-bold text-[#002D74]'>{t('login')}</h2>
          <p className='my-4 text-xs text-[#002D74]'>{t('intoYourAccount')}</p>
          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit((values) => {
              onSubmit(values as ILoginFormValues);
            })}
          >
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
                type={passwordShown ? 'text' : 'password'}
                placeholder={t('password')}
                errors={errors}
                register={register}
                inputClassName={'pr-12'}
              />
              <IconEye
                width={16}
                height={16}
                className='bi bi-eye absolute bottom-2 right-4 -translate-y-1/2 cursor-pointer'
                onClick={() => setPasswordShown((prev) => !prev)}
              />
            </div>
            <GenericButton
              label='Login'
              type='submit'
              filled
              isLoading={loading}
            />
          </form>
          <Separator label={'or'} />
          <GenericButton
            onClick={signInWithGoogle}
            label={t('loginWithGoogle')}
            icon={<IconGoogle />}
          />
          <div className='mt-6 flex items-center justify-between text-xs text-[#002D74]'>
            <p>{t('dontHaveAnAccount')}</p>
            <GenericButton
              label={t('register')}
              linkButton
              href={`/${t('routes:register')}`}
              size='small'
            />
          </div>
          <Separator />
          <div className='flex items-center justify-between text-xs text-[#002D74]'>
            <p>{t('forgotPassword')}</p>
            <GenericButton
              label={t('remindMe')}
              linkButton
              href={`/${t('routes:forgotPassword')}`}
              size='small'
            />
          </div>
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

export default LoginPage;
