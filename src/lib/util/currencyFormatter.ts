const currency = new Intl.NumberFormat(undefined, {
  /*  currency: 'USD', */
  style: 'decimal',
  minimumFractionDigits: 0,
});
export const currencyFormatter = (number: number | undefined) => {
  if (!number) return;
  return currency.format(number);
};
