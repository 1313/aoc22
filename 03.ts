import { chunks, compose, intersect, readInputLines, sum } from "./funcs";

export function solveFindDupe(backpack: string) {
  const pivot = backpack.length / 2;
  const first = new Set(backpack.substring(0, pivot));
  const second = new Set(backpack.substring(pivot));
  const [dupe] = intersect(first, second);
  return dupe;
}

export function solveThreeOfTheSame([first, second, third]: string[]) {
  const [dupe] = intersect(new Set(first), new Set(second), new Set(third));
  return dupe;
}
export function score(dupeChar: string): number {
  const char = dupeChar.charCodeAt(0);
  return dupeChar.toLowerCase() === dupeChar ? char - 96 : char - 38;
}

export function part1(input: string[]) {
  return sum(input.map(compose(score, solveFindDupe)));
}

export function part2(input: string[]) {
  return sum(chunks(input, 3).map(compose(score, solveThreeOfTheSame)));
}

const input = readInputLines("03.txt");
console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
