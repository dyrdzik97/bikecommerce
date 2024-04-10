interface ILanguage {
  interfaceCode: string;
}

export const getLanguageCodes = (locale = ''): ILanguage => {
  const defaultSelectedLanguage = 'pl';
  const interfaceCode = locale || defaultSelectedLanguage;

  return {
    interfaceCode,
  };
};
