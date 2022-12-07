import { expect, test } from "vitest";

import { part2, part1 } from "./07";

const exampleData = [
  "$ cd /",
  "$ ls",
  "dir a",
  "14848514 b.txt",
  "8504156 c.dat",
  "dir d",
  "$ cd a",
  "$ ls",
  "dir e",
  "29116 f",
  "2557 g",
  "62596 h.lst",
  "$ cd e",
  "$ ls",
  "584 i",
  "$ cd ..",
  "$ cd ..",
  "$ cd d",
  "$ ls",
  "4060174 j",
  "8033020 d.log",
  "5626152 d.ext",
  "7214296 k",
];

test("Part 1 example part 2", () => {
  expect(part1(exampleData)).toBe(95437);
});

test("Part 2 example", () => {
  expect(part2(exampleData)).toBe(24933642);
});
