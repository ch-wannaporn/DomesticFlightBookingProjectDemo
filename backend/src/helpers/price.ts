export const getPriceQuery = (price: string): Record<string, Object> => {
  let obj = {};

  if (price.includes("<")) {
    obj = { $lt: Number(price.replace("<", "")) };
  }

  if (price.includes(">")) {
    obj = { $gt: Number(price.replace(">", "")) };
  }

  if (price.includes("-")) {
    obj = {
      $gte: Number(price.split("-")[0]),
      $lte: Number(price.split("-")[1]),
    };
  }

  return { price: obj };
};
