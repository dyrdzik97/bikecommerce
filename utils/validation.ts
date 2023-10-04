import * as Yup from 'yup';

export const nameValidation = Yup.string()
  .required('Field is required')
  .min(2, 'Min length 2');

export const surnameValidation = Yup.string()
  .required('Field is required')
  .min(2, 'Min length 2');
export const townValidation = Yup.string().required('Town is required');
export const emailValidation = Yup.string()
  .email()
  .required('* Email is required.');
export const zipCodeValidation = Yup.string()
  .required('Zipcode is a required field')
  .matches(/^\d{2}(?:[-\s]\d{3})?$/, 'Invalid zipcode format');
