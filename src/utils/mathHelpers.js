// Wrappers around Math functions
export const mhypot = Math.hypot;
export const mrandom = Math.random;
export const mmax = Math.max;
export const mmin = Math.min;
export const mround = Math.round;
export const mfloor = Math.floor;
export const msqrt = Math.sqrt;
export const mabs = Math.abs;

// Random number between [min..max[
export function alea(min, max) {
  if (typeof max === "undefined") return min * mrandom();
  return min + (max - min) * mrandom();
}

// Random integer between [min..max[
export function intAlea(min, max) {
  if (typeof max === "undefined") {
    max = min;
    min = 0;
  }
  return mfloor(min + (max - min) * mrandom());
}
