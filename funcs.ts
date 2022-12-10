import fs from "fs";

export const sum = (a: number[]): number => a.reduce((a, b) => a + b, 0);
export const product = (a: number[]): number => a.reduce((a, b) => a * b, 1);
export const max = (a) => a.reduce((a, b) => (a > b ? a : b), -Infinity);

export function addVector(
  a: [number, number],
  b: [number, number]
): [number, number] {
  return [a[0] + b[0], a[1] + b[1]];
}

export function subtractVector(
  a: [number, number],
  b: [number, number]
): [number, number] {
  return [a[0] - b[0], a[1] - b[1]];
}
export function distance(
  a: [number, number],
  b: [number, number]
): [number, number] {
  return [b[0] - a[0], b[1] - a[1]];
}

export function magnitude(d: [number, number]): number {
  return Math.round(Math.sqrt(d[0] * d[0] + d[1] * d[1]));
}

export function direction(d: [number, number], m?: number): [number, number] {
  m = m ?? magnitude(d);
  const dir = m === 0 ? [0, 0] : [d[0] / m, d[1] / m];
  return [
    dir[0] === 0 ? 0 : dir[0] > 0 ? 1 : -1,
    dir[1] === 0 ? 0 : dir[1] > 0 ? 1 : -1,
  ];
}

export function scale(a: [number, number], scalar: number): [number, number] {
  return [a[0] * scalar, a[1] * scalar];
}

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

export const filter =
  <A>(f: (a: A) => boolean) =>
  (a: A[]) =>
    a.filter(f);
export const transpose = <T>(matrix: T[][]) =>
  matrix.reduce(
    (prev, next) => next.map((_, i) => (prev[i] ?? []).concat(next[i])),
    [[]] as T[][]
  );
export const exclude = (match: string) => filter<string>((e) => e !== match);
export const flat = <T>(a: T[][] | T[]) => a.flat();

export const match = (regex: RegExp) => (str: string) =>
  str.match(regex) ?? ([] as string[]);

export const replace = (regex: RegExp, replaceWith: string) => (str: string) =>
  str.replace(regex, replaceWith);
export const apply =
  <T, R>(f: (...args: T[]) => R) =>
  (a: T[]) =>
    f(...a);
export const readInput = (inputFile: string) =>
  fs.readFileSync(inputFile, { encoding: "utf-8" });

export const id = <T>(a: T) => a;

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
export function compose<A, B, C, D>(
  fn0: (arg: C) => D,
  fn1: (arg: B) => C,
  fn2: (arg: A) => B
): (arg: A) => D;
export function compose<A, B, C, D, E>(
  fn0: (arg: D) => E,
  fn1: (arg: C) => D,
  fn2: (arg: B) => C,
  fn3: (arg: A) => B
): (arg: A) => E;
export function compose<A, B, C, D, E, F>(
  fn0: (arg: E) => F,
  fn1: (arg: D) => E,
  fn2: (arg: C) => D,
  fn3: (arg: B) => C,
  fn4: (arg: A) => B
): (arg: A) => F;
export function compose<A, B, C, D, E, F, G>(
  fn0: (arg: F) => G,
  fn1: (arg: E) => F,
  fn2: (arg: D) => E,
  fn3: (arg: C) => D,
  fn4: (arg: B) => C,
  fn5: (arg: A) => B
): (arg: A) => G;
export function compose<A, B, C, D, E, F, G, H>(
  fn0: (arg: G) => H,
  fn1: (arg: F) => G,
  fn2: (arg: E) => F,
  fn3: (arg: D) => E,
  fn4: (arg: C) => D,
  fn5: (arg: B) => C,
  fn6: (arg: A) => B
): (arg: A) => H;
export function compose<A, B, C, D, E, F, G, H, I>(
  fn0: (arg: H) => I,
  fn1: (arg: G) => H,
  fn2: (arg: F) => G,
  fn3: (arg: E) => F,
  fn4: (arg: D) => E,
  fn5: (arg: C) => D,
  fn6: (arg: B) => C,
  fn7: (arg: A) => B
): (arg: A) => I;

export function compose(...fns: any[]): any {
  return (initial: any) => fns.reduceRight((arg, fn) => fn(arg), initial);
}

export const dropAt =
  <T>(position: number) =>
  (a: T[]) => {
    const n = [...a];

    n.splice(position === -1 ? a.length - 1 : position, 1);
    return n;
  };

export const take =
  <T>(start: number, end: number = start + 1) =>
  (a: T[]) =>
    a.slice(start, end);
