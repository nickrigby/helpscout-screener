import { strStartsWithUppercaseLetter } from "../index";

test("string starting with uppercase letter returns true", () =>
  expect(strStartsWithUppercaseLetter("Help Scout")).toBe(true));

test("string starting with lowercase letter returns false", () =>
  expect(strStartsWithUppercaseLetter("help scout")).toBe(false));

test("empty string returns false", () =>
  expect(strStartsWithUppercaseLetter("")).toBe(false));

test("null string returns false", () =>
  expect(strStartsWithUppercaseLetter(null)).toBe(false));

test("undefined string returns false", () =>
  expect(strStartsWithUppercaseLetter()).toBe(false));
