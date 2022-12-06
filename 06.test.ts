import { expect, test } from "vitest";
import { findMarker } from "./06";

const exampleData = {
  bvwbjplbgvbhsrlpgdmjqwftvncz: 5,
  nppdvjthqldpwncqszvftbrmjlhg: 6,
  nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg: 10,
  zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw: 11,
};

test("part 1 example data", () => {
  for (const [data, expected] of Object.entries(exampleData)) {
    expect(findMarker(data, 4)).toBe(expected);
  }
});
