import { id, product, readInputLines } from "./funcs";
export function part1(forrest: number[][]): number {
  let numVisible = 0;
  for (let row = 0; row < forrest.length; ++row)
    for (let col = 0; col < forrest.length; ++col) {
      numVisible += visibleTreesFrom(forrest, row, col);
    }
  return numVisible;
}

export function part2(forrest: number[][]): number {
  let currentMaxScenicScore = 0;

  for (let row = 0; row < forrest.length; ++row)
    for (let col = 0; col < forrest.length; ++col) {
      currentMaxScenicScore = Math.max(
        currentMaxScenicScore,
        scenicScore(forrest, row, col)
      );
    }
  return currentMaxScenicScore;
}

export function scenicScore(
  forrest: number[][],
  row: number,
  col: number
): number {
  const cellValue = forrest[row][col];

  let scores: number[] = [0, 0, 0, 0];

  let below = row + 1;
  while (forrest[below]?.[col] < cellValue) {
    below++;
    scores[0]++;
  }

  if (forrest[below]?.[col] !== undefined) {
    scores[0]++;
  }

  let above = row - 1;
  while (forrest[above]?.[col] < cellValue) {
    above--;
    scores[1]++;
  }

  if (forrest[above]?.[col] !== undefined) {
    scores[1]++;
  }

  let left = col - 1;
  while (forrest[row]?.[left] < cellValue) {
    left--;
    scores[2]++;
  }

  if (forrest[left]?.[col] !== undefined) {
    scores[2]++;
  }

  let right = col + 1;
  while (forrest[row]?.[right] < cellValue) {
    right++;
    scores[3]++;
  }

  if (forrest[right]?.[col] !== undefined) {
    scores[3]++;
  }

  return product(scores);
}

export function visibleTreesFrom(
  forrest: number[][],
  row: number,
  col: number
): number {
  const numRows = forrest.length;
  const numCols = forrest[0].length;
  const cellValue = forrest[row][col];

  let steps = 1;

  let visibility = [true, true, true, true];
  while (steps < numRows || steps < numCols) {
    let above = row - steps;
    let below = row + steps;
    let left = col - steps;
    let right = col + steps;
    visibility[0] = visibility[0] && cellValue > (forrest[above]?.[col] ?? -1);
    visibility[1] = visibility[1] && cellValue > (forrest[below]?.[col] ?? -1);
    visibility[2] = visibility[2] && cellValue > (forrest[row]?.[left] ?? -1);
    visibility[3] = visibility[3] && cellValue > (forrest[row]?.[right] ?? -1);
    steps++;
  }

  return visibility.some(id) ? 1 : 0;
}
const input = readInputLines("08.txt").map((line) =>
  line.split("").map(Number)
);
console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
