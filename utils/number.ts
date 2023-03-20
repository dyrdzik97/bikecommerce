export const getPercentageValue = (value: number, baseValue: number) =>
  Math.floor(100 - (value * 100) / baseValue);

export const isDecimal = (number: number) => !!(number % 1);
