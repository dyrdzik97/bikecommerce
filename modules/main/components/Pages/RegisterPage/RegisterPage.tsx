import { yupResolver } from '@hookform/resolvers/yup';
import { initializeApp } from 'firebase/app';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { firebaseConfig } from '../../../../../services/firebaseConfig';
import {
  emailRegister,
  registerDatabase,
} from '../../../../../services/register';
import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Input from '../../../../ui/components/Inputs/Input/Input';
import InputErrorMessage from '../../../../ui/components/Inputs/InputErrorMessage/InputErrorMessage';
import Separator from '../../../../ui/components/Separator/Separator';
import { IRegisterFormValues } from '../../../models';
import IconEye from '../../../utils/Icons/IconEye/IconEye';

const RegisterPage = () => {
  const { t } = useTranslation('auth');
  const { t: tRoutes } = useTranslation('routes');
  const { t: tValidations } = useTranslation('validations');

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
    email: yup.string().email().required('* Email is required.'),
    password: yup
      .string()
      .required(`${tValidations('requiredErrorMessage')}`)
      .min(8, `${tValidations('incorrectEmailErrorMessage')}`),
  });

  const [registerError, setRegisterError] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = (data: IRegisterFormValues) => {
    const { email, password, name, surname } = data;

    emailRegister(email, password)
      .then((response) => {
        registerDatabase({
          id: response.user.uid,
          email,
          name,
          surname,
          password,
          displayName: `${name} ${surname}`,
        })
          .then(() => {
            toast(t('registerSuccess'), {
              hideProgressBar: true,
              type: 'success',
            });
            router.push('/');
          })
          .catch((error) => setRegisterError(error.message));
      })
      .catch((error) => setRegisterError(error.message));
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return (
    <section className='bg-gray-50 m-10 flex min-h-screen items-center justify-center'>
      <div className='bg-gray-100 relative flex max-w-3xl items-center rounded-2xl p-5 shadow'>
        <div className='px-8 md:w-1/2 md:px-8'>
          <h2 className='text-2xl font-bold text-[#002D74]'>{t('register')}</h2>
          <p className='my-4 text-xs text-[#002D74]'>
            {t('createYourAccount')}
          </p>

          <form
            className='flex flex-col gap-4'
            onSubmit={handleSubmit((values) =>
              onSubmit(values as IRegisterFormValues)
            )}
          >
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
            <GenericButton label='Register' type='submit' filled />
          </form>
          {registerError && <InputErrorMessage message={registerError} />}
          <Separator className='mt-10' />
          <div className='mt-10 flex items-center justify-between text-xs text-[#002D74]'>
            <p>{t('doYouHaveAnAccount')}</p>
            <GenericButton
              label={t('login')}
              linkButton
              href={`/${tRoutes('login')}`}
              size='small'
            />
          </div>
        </div>

        <div className='hidden w-1/2 md:block'>
          <img
            className='rounded-2xl'
            src='https://media.istockphoto.com/id/1284762593/photo/asian-man-cycle-in-countryside-road.jpg?s=612x612&w=0&k=20&c=YRoEaxYed4Qdi4u5fuBjbL3Aka9ERp42UYvqPqAUja0='
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
