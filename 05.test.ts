import { expect, test } from "vitest";
import { parseInitial, parseMoveProcedures, part1, part2 } from "./05";

const exampleInput = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

test("parse initial", () => {
  const [rawInitial] = exampleInput.split("\n\n");
  expect(parseInitial(rawInitial)).toEqual([
    ["[N]", "[Z]"],
    ["[D]", "[C]", "[M]"],
    ["[P]"],
  ]);
});

test("parse move procedures", () => {
  expect(parseMoveProcedures(exampleInput)).toEqual([
    [1, 2, 1],
    [3, 1, 3],
    [2, 2, 1],
    [1, 1, 2],
  ]);
});

test("part 1", () => {
  expect(part1(exampleInput)).toBe("CMZ");
});

test("part 2", () => {
  expect(part2(exampleInput)).toBe("MCD");
});
