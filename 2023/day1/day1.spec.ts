import { day1 } from './day1';
import { data } from './data';

const exampleTestData = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

describe('day 1', () => {
  it('passes example', () => {
    expect(day1(exampleTestData)).toBe(142);
  });

  it('passes challenge', () => {
    expect(day1(data)).toBe(55029);
  });
});
