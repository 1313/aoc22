import { promises as fs } from "fs";
import { max, sum } from "./funcs.mjs";

const calories = await fs.readFile("./01.txt");

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

console.log(f, f0, f1, f + f0 + f1);
