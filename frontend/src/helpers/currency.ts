export const changeToCurrencyFormat = (num: number): string => {
  return Number(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
