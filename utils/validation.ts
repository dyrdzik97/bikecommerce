import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const { t } = useTranslation('validations');

export const nameValidation = Yup.string()
  .required(`${t('requiredErrorMessage')}`)
  .min(2, `${t('minCharactersNumberErrorMessage', { number: 2 })}`);

export const surnameValidation = Yup.string()
  .required(`${t('requiredErrorMessage')}`)
  .min(2, `${t('minCharactersNumberErrorMessage', { number: 2 })}`);
export const townValidation = Yup.string().required(
  `${t('requiredErrorMessage')}`
);
export const buildingNumberValidation = Yup.number()
  .required(`${t('requiredErrorMessage')}`)
  .min(1, `${t('minCharactersNumberErrorMessage', { number: 1 })}`);
export const flatNumberValidation = Yup.string()
  .required(`${t('requiredErrorMessage')}`)
  .min(1, `${t('minCharactersNumberErrorMessage', { number: 1 })}`);
export const emailValidation = Yup.string()
  .email()
  .required('* Email is required.');
export const zipCodeValidation = Yup.string()
  .required('Zipcode is a required field')
  .matches(/^\d{2}(?:[-\s]\d{3})?$/, 'Invalid zipcode format');
