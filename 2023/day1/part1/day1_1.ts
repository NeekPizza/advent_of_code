export function day1(data: string[]): number {
  let total = 0;
  data.forEach((string) => {
    const digits = string.match(/\d/g) as RegExpMatchArray;
    total += parseInt(`${digits[0]}${digits[digits.length - 1]}`);
  });

  return total;
}
