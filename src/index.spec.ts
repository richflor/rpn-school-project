// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import fc from "fast-check";
import rpn from ".";

expect.extend(matchers);

test(" first", () => {
  expect(rpn("10 3 2 - -")).toEqual(9);
  expect(rpn("3 75 6 / *")).toEqual(37.5);
  expect(rpn("10 3 - 2 -")).toEqual(5);
  expect(rpn("38 72 2 / - 20 MOD 3 +")).toEqual(5);
  expect(rpn("3 NEGATE 5 +")).toEqual(2);
  expect(rpn("1 0 /")).toEqual("?");
  expect(rpn("1 1 1 - /")).toEqual("?");
})
