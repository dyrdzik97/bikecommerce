import * as Yup from 'yup';

export const nameValidation = (errorMessage: string) =>
  Yup.string().required(errorMessage).min(2, 'Min length 2');

export const surnameValidation = (errorMessage: string) =>
  Yup.string().required(errorMessage).min(2, 'Min length 2');
export const townValidation = (errorMessage: string) =>
  Yup.string().required(errorMessage);
export const emailValidation = (errorMessage: string) =>
  Yup.string().email().required(errorMessage);
export const zipCodeValidation = (errorMessage: string) =>
  Yup.string()
    .required(errorMessage)
    .matches(/^\d{2}(?:[-\s]\d{3})?$/, errorMessage);
