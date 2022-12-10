import { readFile } from "fs/promises";

import { readInputLines, sum } from "./funcs";

function draw(symbol) {
  switch (symbol) {
    case "A":
    case "X":
      return 1;
    case "B":
    case "Y":
      return 2;
    case "C":
    case "Z":
      return 3;
  }
}

function pick([me, opponent]) {
  switch (me) {
    case 1:
      switch (opponent) {
        case 1:
          return 3;
        case 2:
          return 1;
        case 3:
          return 2;
      }
    case 2:
      switch (opponent) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
      }
    case 3:
      switch (opponent) {
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 1;
      }
  }
  throw Error("");
}

export function part2(draws) {
  const scores = draws.split(" ").map(draw);
  const me = scores[1];
  return game(me, pick(scores));
}
export function part1(draws) {
  const [me, opponent] = draws.split(" ").map(draw);

  return game(me, opponent);
}

function game(me, opponent) {
  const diff = Math.abs(me - opponent);
  const isDraw = diff === 0;
  const isWin =
    diff === 1 ? Math.max(me, opponent) === me : Math.min(me, opponent) === me;

  if (isDraw) {
    return me + 3;
  } else if (isWin) {
    return me + 6;
  } else {
    return me;
  }
}

const lines = readInputLines("02.txt");

console.log("Part 1:", sum(lines.map(part1)));
console.log("Part 2:", sum(lines.map(part2)));
