import { day2 } from './day2';
import { data } from '../day1/data';

const exampleTestData = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];

describe('day 2', () => {
  it('passes example', () => {
    expect(day2(exampleTestData)).toBe(281);
  });

  it('passes challenge', () => {
    expect(day2(data)).toBe(55686);
  });
});
