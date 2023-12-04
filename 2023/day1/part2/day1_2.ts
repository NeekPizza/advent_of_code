export function day2(data: string[]): number {
  let total = 0;
  data.forEach((string) => {
    const digits = string
      .replace(/one/g, 'o1e')
      .replace(/two/g, 't2o')
      .replace(/three/g, 't3e')
      .replace(/four/g, 'f4r')
      .replace(/five/g, 'f5e')
      .replace(/six/g, 's6x')
      .replace(/seven/g, 's7n')
      .replace(/eight/g, 'e8t')
      .replace(/nine/g, 'n9e')
      .match(/\d/g) as RegExpMatchArray;
    total += parseInt(`${digits[0]}${digits[digits.length - 1]}`);
  });

  return total;
}
