import {
  compose,
  flat,
  map,
  readInputLines,
  split,
  apply,
  stringToNumber,
  sum,
} from "./funcs";

const parseBadgeInterval = compose(map(stringToNumber), split("-"));
const parseBadgeNumbers = compose(flat, map(parseBadgeInterval), split(","));

const checkWithin = (fMin: number, fMax: number, sMin: number, sMax: number) =>
  Number((fMin >= sMin && fMax <= sMax) || (sMin >= fMin && sMax <= fMax));

const checkOverlap = (fMin: number, fMax: number, sMin: number, sMax: number) =>
  Number((fMin >= sMin && fMin <= sMax) || (sMin >= fMin && sMin <= fMax));

export const solveIsWithin = compose(apply(checkWithin), parseBadgeNumbers);
export const solveIsOverlap = compose(apply(checkOverlap), parseBadgeNumbers);

export const part1 = compose(sum, map(solveIsWithin));
export const part2 = compose(sum, map(solveIsOverlap));

const input = readInputLines("04.txt");
console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
