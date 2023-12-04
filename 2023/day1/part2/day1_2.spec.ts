import { day1_2 } from './day1_2';
import { data } from '../data';

const exampleData = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];

describe('day 1_2', () => {
  it('passes example', () => {
    expect(day1_2(exampleData)).toBe(281);
  });

  it('passes challenge', () => {
    expect(day1_2(data)).toBe(55686);
  });
});
