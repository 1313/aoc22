import { expect, test } from "vitest";
import { chunks, intersect } from "./funcs";

test("intersect", () => {
  expect(intersect(new Set("ABC"), new Set("AC"), new Set("BA"))).toEqual(
    new Set("A")
  );
  expect(
    intersect(new Set("ABC"), new Set("ABC"), new Set("BA"), new Set("BA"))
  ).toEqual(new Set("AB"));
});

test("chunk", () => {
  expect(chunks([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  expect(chunks([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
});
