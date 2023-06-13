// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import rpn from ".";



test("two numbers", () => {
  expect(rpn("5 2.4 -")).toEqual(2.6);
  expect(rpn("4 91 +")).toEqual(95);
  expect(rpn("3 7 *")).toEqual(21);
  expect(rpn("10.5 3 /")).toEqual(3.5);
  expect(rpn("8 3 MOD")).toEqual(2);
})

test("divide by 0", () => {
  expect(rpn("1 0 /")).toEqual("?");
  expect(rpn("1 1 1 - /")).toEqual("?");
})

test("three numbers or more", () => {
  expect(rpn("10 3 2 - -")).toEqual(9);
  expect(rpn("3 75 6 / *")).toEqual(37.5);
  expect(rpn("7 5 1 4 / - *")).toEqual(33.25);
  expect(rpn("7 59 1 4 MOD + *")).toEqual(420);
  expect(rpn("24 7 5 1 4 / - * +")).toEqual(57.25);
})

test("negative numbers", () => {
  expect(rpn("3 NEGATE 5 +")).toEqual(2);
  expect(rpn("8 5 NEGATE 32 MOD *")).toEqual(-40);
})

test("multiple operations", () => {
  expect(rpn("10 3 - 2 -")).toEqual(5);
  expect(rpn("38 72 2 / - 20 MOD 3 +")).toEqual(5);
  expect(rpn("27 6 2 NEGATE + MOD 7 21 / * 8 72 + /")).toEqual(0.0125 );
})

test("multiple NEGATE operations ", () => {
  expect(rpn("1 1 NEGATE 1 NEGATE 3 NEGATE - + /")).toEqual(1);
})
