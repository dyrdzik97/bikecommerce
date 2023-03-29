import { yupResolver } from '@hookform/resolvers/yup';
import { initializeApp } from 'firebase/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { firebaseConfig } from '../../services/firebaseConfig';
import { emailRegister, registerDatabase } from '../../services/register';

const schema = yup.object().shape({
  // stringValidation("Name", minLength)
  name: yup
    .string()
    .required('* Name is required.')
    .min(2, '* Name is too short'),
  surname: yup
    .string()
    .required('* Surname is required.')
    .min(2, '* Surname is too short'),
  email: yup.string().email().required('* Email is required.'),
  password: yup
    .string()
    .required('* Password is required.')
    .min(8, '* Password is too short - should be 8 chars minimum.'),
});

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState('');
  const { user } = useAuth();
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // IDataBase
    console.warn(data);
    const { email, password, name, surname } = data;

    // registerUser
    // { message: "...", success: true / false }
    emailRegister(email, password)
      .then((response) => {
        console.warn('res', response);

        registerDatabase({
          id: response.user.uid,
          email,
          name,
          surname,
        })
          .then(() => {
            setRegisterError(
              'You have registered succesfully. You can login now'
            );
            router.push('/');
          })
          .catch((e) => setRegisterError(e.message));
      })
      .catch((error) => setRegisterError(error.message));
  };

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  console.warn('user', user);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', paddingTop: 30 }}
    >
      {/*   Social Media Buttons  */}
      <hr style={{ width: '100%', height: 1, color: '#f6f6f655' }} />
      <span
      // style={{
      //   textAlign: 'center',
      //   marginTop: -35,
      //   padding: 15,
      //   backgroundColor: 'white',
      //   display: 'flex',
      //   alignSelf: 'center',
      //   width: 'max-content',
      //   fontWeight: '500',
      // }}
      >
        Register with social media
      </span>

      <div style={{ display: 'flex' }}>
        {/* <SocialMediaButton
          style={{ marginRight: 20 }}
          icon='google'
          onClick={googleAuth}
        >
          Google
        </SocialMediaButton>
        <SocialMediaButton icon='apple'>Apple</SocialMediaButton> */}
      </div>

      <hr
        style={{ width: '100%', height: 1, color: '#f6f6f655', marginTop: 50 }}
      />
      <span
      // style={{
      //   textAlign: 'center',
      //   marginTop: -35,
      //   padding: 15,
      //   backgroundColor: 'white',
      //   display: 'flex',
      //   alignSelf: 'center',
      //   width: 'max-content',
      //   fontWeight: '500',
      // }}
      >
        Register with E-mail
      </span>

      <input
        // register={register}
        placeholder='Name'
        // error={errors.name}
        {...register('name')}
      />
      {/* {errors.name && (
        <span style={{ color: 'red', marginTop: 4, fontSize: 14 }}>
          {errors.name.message}
        </span>
      )} */}
      <input
        // register={register}
        placeholder='Surname'
        {...register('surname')}
        // error={errors.surname}
      />
      {/* {errors.surname && (
        <span style={{ color: 'red', marginTop: 4, fontSize: 14 }}>
          {errors.surname.message}
        </span>
      )} */}
      <input
        // register={register}
        // ref={register}\{...register('surname')}
        {...register('email')}
        placeholder='E-mail'

        // error={errors.email}
      />
      {/* {errors.email && (
        <span style={{ color: 'red', marginTop: 4, fontSize: 14 }}>
          {errors.email.message}
        </span>
      )} */}
      <input
        // register={register}
        placeholder='Password'
        {...register('password')}
        type='password'
        // error={errors.password}
      />
      {/* {errors.password && (
        <span style={{ color: 'red', marginTop: 4, fontSize: 14 }}>
          {errors.password.message}
        </span>
      )} */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      {registerError && (
        <span
          style={{
            color: 'red',
            marginTop: 20,
            fontSize: 14,
            marginBottom: -10,
          }}
        >
          {registerError}
        </span>
      )}

      <button type='submit'>Register</button>
      <div style={{ fontSize: 12, display: 'flex' }}>
        By clicking Register, you agree to use out Terms and that you have read
        our Data Use Policy, including our Cookie Use
      </div>
    </form>
  );
};

export default RegisterForm;
