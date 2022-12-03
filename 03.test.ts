import { expect, test } from "vitest";
import {
  part1,
  part2,
  score,
  solveFindDupe,
  solveThreeOfTheSame,
} from "./03.js";
import { splitInput } from "./funcs.js";

test("part1 find dupe", () => {
  expect(solveFindDupe("vJrwpWtwJgWrhcsFMMfFFhFp")).toBe("p");
  expect(solveFindDupe("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL")).toBe("L");
  expect(solveFindDupe("PmmdzqPrVvPwwTWBwg")).toBe("P");
  expect(solveFindDupe("wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn")).toBe("v");
  expect(solveFindDupe("ttgJtRGJQctTZtZT")).toBe("t");
  expect(solveFindDupe("CrZsJsPPZsGzwwsLwLmpwMDw")).toBe("s");
});

test("part1 score", () => {
  expect(score("a")).toBe(1);
  expect(score("b")).toBe(2);
  expect(score("c")).toBe(3);
  expect(score("d")).toBe(4);
  expect(score("e")).toBe(5);
  expect(score("f")).toBe(6);
  expect(score("g")).toBe(7);
  expect(score("h")).toBe(8);
  expect(score("i")).toBe(9);
  expect(score("j")).toBe(10);
  expect(score("k")).toBe(11);
  expect(score("l")).toBe(12);
  expect(score("m")).toBe(13);
  expect(score("n")).toBe(14);
  expect(score("o")).toBe(15);
  expect(score("p")).toBe(16);
  expect(score("q")).toBe(17);
  expect(score("r")).toBe(18);
  expect(score("s")).toBe(19);
  expect(score("t")).toBe(20);
  expect(score("u")).toBe(21);
  expect(score("v")).toBe(22);
  expect(score("w")).toBe(23);
  expect(score("x")).toBe(24);
  expect(score("y")).toBe(25);
  expect(score("z")).toBe(26);
  expect(score("A")).toBe(27);
  expect(score("B")).toBe(28);
  expect(score("C")).toBe(29);
  expect(score("D")).toBe(30);
  expect(score("E")).toBe(31);
  expect(score("F")).toBe(32);
  expect(score("G")).toBe(33);
  expect(score("H")).toBe(34);
  expect(score("I")).toBe(35);
  expect(score("J")).toBe(36);
  expect(score("K")).toBe(37);
  expect(score("L")).toBe(38);
  expect(score("M")).toBe(39);
  expect(score("N")).toBe(40);
  expect(score("O")).toBe(41);
  expect(score("P")).toBe(42);
  expect(score("Q")).toBe(43);
  expect(score("R")).toBe(44);
  expect(score("S")).toBe(45);
  expect(score("T")).toBe(46);
  expect(score("U")).toBe(47);
  expect(score("V")).toBe(48);
  expect(score("W")).toBe(49);
  expect(score("X")).toBe(50);
  expect(score("Y")).toBe(51);
  expect(score("Z")).toBe(52);
});

test("part 1", () => {
  expect(
    part1(
      splitInput(`vJrwpWtwJgWrhcsFMMfFFhFp
          jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
          PmmdzqPrVvPwwTWBwg
          wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
          ttgJtRGJQctTZtZT
          CrZsJsPPZsGzwwsLwLmpwMDw`)
    )
  ).toBe(157);
});

test("part 2 find three of the same", () => {
  expect(
    solveThreeOfTheSame(
      splitInput(`vJrwpWtwJgWrhcsFMMfFFhFp
  jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  PmmdzqPrVvPwwTWBwg`)
    )
  ).toBe("r");
  expect(
    solveThreeOfTheSame(
      splitInput(`wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      ttgJtRGJQctTZtZT
      CrZsJsPPZsGzwwsLwLmpwMDw`)
    )
  ).toBe("Z");
});

test("part 2 splitInput", () => {
  expect(
    part2(
      splitInput(`vJrwpWtwJgWrhcsFMMfFFhFp
  jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  PmmdzqPrVvPwwTWBwg
  wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
  ttgJtRGJQctTZtZT
  CrZsJsPPZsGzwwsLwLmpwMDw`)
    )
  ).toBe(70);
});
