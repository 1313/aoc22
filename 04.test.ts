import { expect, test } from "vitest";
import { splitInput } from "./funcs";
import { part1, part2, solveIsOverlap, solveIsWithin } from "./04";

const exampleInput = splitInput(
  `2-4,6-8
   2-3,4-5
   5-7,7-9
   2-8,3-7
   6-6,4-6
   2-6,4-8`
);

test("part 1 solve is within", () => {
  expect(solveIsWithin("2-4,6-8")).toBe(0);
  expect(solveIsWithin("6-6,4-6")).toBe(1);
});

test("part 2 solve overlap", () => {
  expect(solveIsOverlap("14-83,5-13")).toBe(0);
  expect(solveIsOverlap("2-8,3-7")).toBe(1);
  expect(solveIsOverlap("1-2,3-7")).toBe(0);
  expect(solveIsOverlap("1-4,5-6")).toBe(0);
  expect(solveIsOverlap("6-6,1-6")).toBe(1);
  expect(solveIsOverlap("20-92,21-55")).toBe(1);
});

test("part 1 splitInput", () => {
  expect(part1(exampleInput)).toBe(2);
});

test("part 2 splitInput", () => {
  expect(part2(exampleInput)).toBe(4);
});
