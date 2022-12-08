import { expect, test } from "vitest";
import { part1, part2 } from "./08";

const exampleData = ["30373", "25512", "65332", "33549", "35390"].map((a) =>
  a.split("").map(Number)
);

test("part 1 example data", () => {
  expect(part1(exampleData)).toBe(21);
});

test("part 2 example data", () => {
  expect(part2(exampleData)).toBe(8);
});
