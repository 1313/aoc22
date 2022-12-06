import { readInputLines, splitInput } from "./funcs";

export function findMarker(signal: string, numDistinct: number): number {
  for (let i = 0; i < signal.length; i++) {
    if (new Set(signal.slice(i, i + numDistinct)).size === numDistinct) {
      return i + numDistinct;
    }
  }
  return -1;
}

const [input] = readInputLines("06.txt");

console.log("Part 1:", findMarker(input, 4));
console.log("Part 2:", findMarker(input, 14));
