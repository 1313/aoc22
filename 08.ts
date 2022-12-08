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
  exampleData: number[][],
  row: number,
  col: number
): number {
  const cellValue = exampleData[row][col];

  let scores: number[] = [0, 0, 0, 0];

  let below = row + 1;
  while (exampleData[below]?.[col] < cellValue) {
    below++;
    scores[0]++;
  }

  if (exampleData[below]?.[col] !== undefined) {
    scores[0]++;
  }

  let above = row - 1;
  while (exampleData[above]?.[col] < cellValue) {
    above--;
    scores[1]++;
  }

  if (exampleData[above]?.[col] !== undefined) {
    scores[1]++;
  }

  let left = col - 1;
  while (exampleData[row]?.[left] < cellValue) {
    left--;
    scores[2]++;
  }

  if (exampleData[left]?.[col] !== undefined) {
    scores[2]++;
  }

  let right = col + 1;
  while (exampleData[row]?.[right] < cellValue) {
    right++;
    scores[3]++;
  }

  if (exampleData[right]?.[col] !== undefined) {
    scores[3]++;
  }

  return product(scores);
}

export function visibleTreesFrom(
  exampleData: number[][],
  row: number,
  col: number
): number {
  const numRows = exampleData.length;
  const numCols = exampleData[0].length;
  const cellValue = exampleData[row][col];

  let steps = 1;

  let visibility = [true, true, true, true];
  while (steps < numRows || steps < numCols) {
    let above = row - steps;
    let below = row + steps;
    let left = col - steps;
    let right = col + steps;
    visibility[0] =
      visibility[0] && cellValue > (exampleData[above]?.[col] ?? -1);
    visibility[1] =
      visibility[1] && cellValue > (exampleData[below]?.[col] ?? -1);
    visibility[2] =
      visibility[2] && cellValue > (exampleData[row]?.[left] ?? -1);
    visibility[3] =
      visibility[3] && cellValue > (exampleData[row]?.[right] ?? -1);
    steps++;
  }

  return visibility.some(id) ? 1 : 0;
}
const input = readInputLines("08.txt").map((line) =>
  line.split("").map(Number)
);
console.log(part1(input));
console.log(part2(input));
