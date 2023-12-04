export const day2_1 = (data: string[]): number => {
  let sum = 0;
  data.forEach((game, index) => {
    let red = game.match(/([1-9][3-9]|[2-9]0+) red/g) as RegExpMatchArray;
    let green = game.match(/([1-9][4-9]|[2-9]0+) green/g) as RegExpMatchArray;
    let blue = game.match(/([1-9][5-9]|[2-9]0+) blue/g) as RegExpMatchArray;
    if (!red && !green && !blue) {
      sum += index + 1;
    }
  });

  return sum;
};
