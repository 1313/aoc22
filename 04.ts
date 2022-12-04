import {
  compose,
  map,
  readInputLines,
  split,
  stringToNumber,
  sum,
} from "./funcs";

const parseBadgeInterval = compose(map(stringToNumber), split("-"));
const parseBadgeNumbers = compose(map(parseBadgeInterval), split(","));

export function solveIsWithin(badgeIds: string): number {
  const [[fMin, fMax], [sMin, sMax]] = parseBadgeNumbers(badgeIds);
  return Number(
    (fMin >= sMin && fMax <= sMax) || (sMin >= fMin && sMax <= fMax)
  );
}

export function solveIsOverlap(badgeIds: string): number {
  const [[fMin, fMax], [sMin, sMax]] = parseBadgeNumbers(badgeIds);
  return Number(
    (fMin >= sMin && fMin <= sMax) || (sMin >= fMin && sMin <= fMax)
  );
}

export const part1 = compose(sum, map(solveIsWithin));
export const part2 = compose(sum, map(solveIsOverlap));

console.log("Part 1:", part1(readInputLines("04.txt")));
console.log("Part 2:", part2(readInputLines("04.txt")));
