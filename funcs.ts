import fs from "fs";
export const sum = (a) => a.reduce((a, b) => a + b, 0);
export const max = (a) => a.reduce((a, b) => (a > b ? a : b), -Infinity);

export const intersect = <T>(...sets: Set<T>[]) =>
  sets.reduce((intersected: Set<T>, currentSet: Set<T>) => {
    return new Set([...intersected].filter((aEl) => currentSet.has(aEl)));
  }, sets[0]);

export function chunks<T>(a: T[], chunkSize: number) {
  function* generator() {
    for (let i = 0; i < a.length; i += chunkSize) {
      yield a.slice(i, i + chunkSize);
    }
  }
  return Array.from(generator());
}

export const readInput = (inputFile: string) =>
  fs.readFileSync(inputFile, { encoding: "utf-8" });

export const splitInput = (input: string) =>
  input
    .trim()
    .split("\n")
    .map((a) => a.trim());
export const readInputLines = (inputFile: string) =>
  splitInput(readInput(inputFile));

export const compose =
  <TF extends Function, TG extends Function>(f: TF, g: TG) =>
  (input) =>
    f(g(input));
