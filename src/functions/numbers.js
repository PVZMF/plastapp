export const toPersianNumber = (n) => {
  const farsiDigits = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };

  return n?.toString()
    ? n
        .toString()
        .split("")
        .map((x) => farsiDigits[x] || x)
        .join("")
    : null;
};

export const toDouble = (number) => {
  let result = number;
  if (number < 10) {
    result = `0${number}`;
  } else result = result.toString();
  return result;
};

export const commafy = (num) => {
  if (!num) return 0;
  var str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
};

export const preparedPrice = (priceInEnglish) => {
  if (!priceInEnglish) return "۰";
  const priceInCommafy = commafy(priceInEnglish);
  const commafyInPersian = toPersianNumber(priceInCommafy);
  return commafyInPersian;
};
