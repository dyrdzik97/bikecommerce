interface ILanguage {
  interfaceCode: string;
}

export const getLanguageCodes = (locale = ''): ILanguage => {
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
