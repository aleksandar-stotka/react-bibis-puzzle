import { intAlea } from "./mathHelpers";

// Shuffle array in place
export function arrayShuffle(array) {
  let k1, temp;
  for (let k = array.length - 1; k >= 1; --k) {
    k1 = intAlea(0, k + 1); // random index
    temp = array[k];
    array[k] = array[k1];
    array[k1] = temp;
  }
  return array;
}
