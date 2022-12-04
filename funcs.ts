import fs from "fs";
import { stringify } from "querystring";
export const sum = (a: number[]): number => a.reduce((a, b) => a + b, 0);
export const max = (a) => a.reduce((a, b) => (a > b ? a : b), -Infinity);

export const intersect = <T>(...sets: Set<T>[]) =>
  sets.reduce((intersected: Set<T>, currentSet: Set<T>) => {
    return new Set([...intersected].filter((aEl) => currentSet.has(aEl)));
  }, sets[0]);

export const split = (separator: string) => (input: string) =>
  input.split(separator);
export const trim = (input: string) => input.trim();
export function chunks<T>(a: T[], chunkSize: number) {
  function* generator() {
    for (let i = 0; i < a.length; i += chunkSize) {
      yield a.slice(i, i + chunkSize);
    }
  }
  return Array.from(generator());
}
export const stringToNumber = compose(Number, trim);

export const map =
  <A, R>(f: (a: A) => R) =>
  (a: A[]) =>
    a.map(f);
export const readInput = (inputFile: string) =>
  fs.readFileSync(inputFile, { encoding: "utf-8" });

export const splitInput = (input: string) =>
  input
    .trim()
    .split("\n")
    .map((a) => a.trim());
export const readInputLines = (inputFile: string) =>
  splitInput(readInput(inputFile));

export function compose<A>(): (arg: A) => A;
export function compose<A, B>(fn: (arg: A) => B): (arg: A) => B;
export function compose<A, B, C>(
  fn0: (arg: B) => C,
  fn1: (arg: A) => B
): (arg: A) => C;

export function compose(...fns: any[]): any {
  return (initial: any) => fns.reduceRight((arg, fn) => fn(arg), initial);
}
