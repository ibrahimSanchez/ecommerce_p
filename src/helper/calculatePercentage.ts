export const calculatePercentage = (price: number, discountedPrice: number) => {
  if (+price <= 0 || +discountedPrice < 0 || +discountedPrice > +price) {
    return 0;
  }

  const discount = ((price - discountedPrice) / price) * 100;
  return Math.round(discount);
};
