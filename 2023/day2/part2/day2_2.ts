export const day2_2 = (data: string[]): number => {
  let power = 0;
  data.forEach((game) => {
    let red = Math.max(
      ...(game.match(/\d+(?=.red) /g)?.map(Number) as number[])
    );
    let green = Math.max(
      ...(game.match(/\d+(?=.green) /g)?.map(Number) as number[])
    );
    let blue = Math.max(
      ...(game.match(/\d+(?=.blue) /g)?.map(Number) as number[])
    );
    power += red * green * blue;
  });

  return power;
};
