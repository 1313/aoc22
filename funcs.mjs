export const sum = (a) => a.reduce((a, b) => a + b, 0);
export const max = (a) => a.reduce((a, b) => (a > b ? a : b), -Infinity);
