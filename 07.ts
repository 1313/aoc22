import { readInputLines, sum } from "./funcs";

export const parseFileTree = (instructions: string[]) => {
  let currentPath: Array<string> = [];
  const sizeMap: Map<string, number> = new Map();

  for (let counter = 0; counter < instructions.length; ++counter) {
    const [, command, currentDir] = instructions[counter].split(" ");
    switch (command) {
      case "cd": {
        if (currentDir === "..") {
          const currentSize = sizeMap.get(currentPath.join("/"))!;
          currentPath.pop();
          const parentSize = sizeMap.get(currentPath.join("/"))!;
          sizeMap.set(currentPath.join("/"), currentSize + parentSize);
        } else if (currentDir === "/") {
          currentPath = ["root"];
        } else {
          currentPath.push(currentDir);
        }
        break;
      }
      case "ls": {
        let size = 0;

        while (
          instructions[counter + 1] &&
          !instructions[counter + 1].startsWith("$")
        ) {
          const data = instructions[counter + 1];
          //   a.push(data);
          const [raw] = data?.match(/(\d+)/) ?? [0];

          size += +raw;
          counter++;
        }

        sizeMap.set(currentPath.join("/"), size);

        break;
      }
    }
  }

  // Backtrack last path
  do {
    const currentSize = sizeMap.get(currentPath.join("/"))!;
    currentPath.pop();
    const parentSize = sizeMap.get(currentPath.join("/"))!;
    sizeMap.set(currentPath.join("/"), currentSize + parentSize);
  } while (currentPath.length > 1);

  return [...sizeMap.values()];
};

export const part1 = (instructions: string[]) =>
  sum(parseFileTree(instructions).filter((size) => size <= 100_000));

export const part2 = (instructions: string[]) => {
  const files = parseFileTree(instructions).sort((a, b) => a - b);
  const used = files.at(-1)!;

  const free = 70_000_000 - used;
  const needed = 30_000_000 - free;

  for (const size of files) {
    if (size >= needed) {
      return size;
    }
  }
};
console.log("Part 1", part1(readInputLines("07.txt")));
console.log("Part 2", part2(readInputLines("07.txt")));
