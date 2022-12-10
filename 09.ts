import {
  addVector,
  direction,
  distance,
  magnitude,
  readInputLines,
} from "./funcs";

function moveHead(
  headDirection: string,
  [x, y]: [number, number]
): [number, number] {
  switch (headDirection) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "L":
      return [x - 1, y];
    case "R":
      return [x + 1, y];
  }

  return [x, y];
}
function moveTail(T: [number, number], H: [number, number]) {
  const d = distance(T, H);
  const m = magnitude(d);

  if (m > 1) {
    return addVector(T, direction(d, m));
  } else {
    return T;
  }
}
export function moveRope(moves: string[], ropeSize: number): number {
  let rope: [number, number][] = Array.from({ length: ropeSize }, () => [0, 0]);
  const field: Map<string, string> = new Map();

  for (const move of moves) {
    let [headDirection, numSteps] = move.split(" ");
    let steps = +numSteps;
    while (--steps >= 0) {
      rope[0] = moveHead(headDirection, rope[0]);
      for (let i = 1; i < rope.length; i++) {
        rope[i] = moveTail(rope[i], rope[i - 1]);
      }
      field.set(rope.at(-1)!.join("_"), "#");
    }
  }

  return field.size;
}

function printField(field: Map<string, string>) {
  let out = "";
  for (let col = 0; col < 6; ++col) {
    for (let row = 0; row < 6; ++row) {
      out += field.get([row, col].join("_")) ?? ".";
    }
    out += "\n";
  }
  console.log(out.split("\n").reverse().join("\n"));
}

const inputLines = readInputLines("09.txt");

console.log("Part 1:", moveRope(inputLines, 2));
console.log("Part 2:", moveRope(inputLines, 10));
