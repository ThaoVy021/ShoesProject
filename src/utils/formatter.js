export const numberToString = number => {
  return (number || '0').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '  ');
};
export const formatCurrency = (input = 0) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getTextStyle = (size, lineHeight, font, color) => {
  return {
    fontSize: size,
    lineHeight: lineHeight,
    ...(font ? {fontFamily: `Roboto-${font}`} : {}),
    ...(color ? {color} : {}),
  };
};
export default {
  numberToString,
  formatCurrency,
  getTextStyle,
};
