import { strStartsWithUppercaseLetter } from "../index";

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  .split("")
  .map((letter) => [letter, true]);

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => [letter, false]);

test.each(uppercaseLetters)(
  "string starting with %s returns true",
  (a, expected) => {
    expect(strStartsWithUppercaseLetter(a)).toBe(expected);
  }
);

test.each(lowercaseLetters)(
  "string starting with %s returns false",
  (a, expected) => {
    expect(strStartsWithUppercaseLetter(a)).toBe(expected);
  }
);

test("empty string returns false", () =>
  expect(strStartsWithUppercaseLetter("")).toBe(false));

test("null string returns false", () =>
  expect(strStartsWithUppercaseLetter(null)).toBe(false));

test("undefined string returns false", () =>
  expect(strStartsWithUppercaseLetter()).toBe(false));
