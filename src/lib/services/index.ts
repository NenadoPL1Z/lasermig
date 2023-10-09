export const telephoneMask = (state: string) => {
  let inputNumbersValue = state.replace(/[\D]+/g, "");
  let formattedInputValue = "";

  /*! Если пустая строка */
  if (!inputNumbersValue) {
    return "";
  }
  if (inputNumbersValue[0].match(/[1-6, 9]/))
    inputNumbersValue = "7" + inputNumbersValue;
  formattedInputValue = "+7 ";
  if (inputNumbersValue.length > 1) {
    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
  }
  if (inputNumbersValue.length >= 5) {
    formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
  }
  if (inputNumbersValue.length >= 8) {
    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
  }
  if (inputNumbersValue.length >= 10) {
    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
  }

  if (state.length >= 0 && state.length <= 18) {
    return formattedInputValue;
  }
  return formattedInputValue;
};

export const getImageUrl = (url: string) => `${url}`;

export const getFormatDate = (date: string) => {
  return new Date(date).toLocaleString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatPrice = (price: number) => {
  const format = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return format.format(price);
};

export const checkPrice = (price: string) => {
  return isNaN(+price) ? price : ` ОТ ${formatPrice(+price)}`;
};
