import { isDecimal } from './number';

export const formatPrice = (price?: number | string, currency?: string) => {
  if (typeof price === 'undefined') {
    return '';
  }

  let tmp: string | number = +price;

  if (isDecimal(tmp)) {
    tmp = tmp.toFixed(2);
  }

  const formattedPrice = tmp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (!currency) {
    return formattedPrice;
  }

  return `${formattedPrice} ${currency}`;
};
