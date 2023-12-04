import { day1_1 } from './day1_1';
import { data } from '../data';

const exampleData = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];

describe('day 1_1', () => {
  it('passes example', () => {
    expect(day1_1(exampleData)).toBe(142);
  });

  it('passes challenge', () => {
    expect(day1_1(data)).toBe(55029);
  });
});
