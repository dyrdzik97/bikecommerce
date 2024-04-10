export let CURRENT_LOCALE = '';

export const setCurrentLocale = (locale?: string) => {
  if (!locale) {
    return '';
  }

  if (locale !== CURRENT_LOCALE) {
    return (CURRENT_LOCALE = locale);
  }
};
