import { isNumber } from "lodash"

export const numberToArray = (number) => {
  if (!isNumber(number)) return [0];

  return `${number}`.split('');
}