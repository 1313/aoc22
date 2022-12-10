import { readFile } from "fs/promises";

import { max, sum } from "./funcs";

const calories = await readFile("./01.txt");

const m = calories
  .toString()
  .split("\n\n")
  .map((n) => n.split("\n").map(Number))
  .map(sum);

let f = max(m);
m[m.indexOf(f)] = 0;

let f0 = max(m);
m[m.indexOf(f0)] = 0;
let f1 = max(m);
m[m.indexOf(f1)] = 0;

console.log("Part 1:", f);
console.log("Part 2:", f + f0 + f1);
