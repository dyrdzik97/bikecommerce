interface ILanguage {
  interfaceCode: string;
}

export const getLanguageCodes = (locale = ''): ILanguage => {
  // TODO: Think about better handling for default locale
  const defaultShippingTo = 'pl';
  const defaultSelectedLanguage = 'pl';
  const [
    shippingCode = defaultShippingTo,
    interfaceCode = defaultSelectedLanguage,
  ] = locale.split('-');

  return {
    interfaceCode,
  };
};
