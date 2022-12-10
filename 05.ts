import {
  compose,
  dropAt,
  exclude,
  flat,
  map,
  match,
  readInput,
  replace,
  split,
  take,
  transpose,
} from "./funcs";

const parseRawInitialLines = compose(
  dropAt(-1),
  flat<string>,
  map(split("\n")),
  take(0),
  split("\n\n")
);

const fixInputWithEmptyCells = map(
  compose(match(/\[([\sA-Z])\]/g), replace(/(\s\s\s\s)/g, "[ ]"))
);
export const transposeInitialLines = compose(
  map(exclude("[ ]")),
  transpose<string>,
  fixInputWithEmptyCells
);

export const parseInitial = compose(
  transposeInitialLines,
  parseRawInitialLines
);
export const parseMoveProcedures = compose(
  map(compose(map(Number), match(/(\d+)/g))),
  flat<string>,
  map(split("\n")),
  take(1),
  split("\n\n")
);

export const crane9000 = (stacks, amount, from, to) => {
  const stackA = stacks[from - 1];
  const stackB = stacks[to - 1];
  while (amount > 0) {
    stackB.splice(0, 0, ...stackA.splice(0, 1));
    amount--;
  }
  return stacks;
};
export const crane9001 = (stacks, amount, from, to) => {
  const stackA = stacks[from - 1];
  const stackB = stacks[to - 1];
  stackB.splice(0, 0, ...stackA.splice(0, amount));
  return stacks;
};

export const solveMoves = (
  initial: string[][],
  moves: number[][],
  crane: typeof crane9000 | typeof crane9001
): string => {
  for (let [amount, from, to] of moves) {
    crane(initial, amount, from, to);
  }

  return initial.map((a) => a.at(0)?.charAt(1)).join("");
};

export const part1 = (raw: string) => {
  return solveMoves(parseInitial(raw), parseMoveProcedures(raw), crane9000);
};

export const part2 = (raw: string) => {
  return solveMoves(parseInitial(raw), parseMoveProcedures(raw), crane9001);
};

// const rawInput = readInput("05.txt");
// console.log(part1(rawInput));
// console.log(part2(rawInput));
