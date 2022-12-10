import { expect, test } from "vitest";
import { moveRope } from "./09";

const example1Moves = ["R 4", "U 4", "L 3", "D 1", "R 4", "D 1", "L 5", "R 2"];
const example2Moves = [
  "R 5",
  "U 8",
  "L 8",
  "D 3",
  "R 17",
  "D 10",
  "L 25",
  "U 20",
];
test("part 1 example", () => {
  expect(moveRope(example1Moves, 2)).toBe(13);
});

test("part 2 example", () => {
  expect(moveRope(example2Moves, 10)).toBe(36);
});
