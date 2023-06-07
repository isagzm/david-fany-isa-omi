export function stringCalculator(numbers) {
  const split = numbers.split(",");

  const firstNumber = Number(split[0]);
  const secondNumber = Number(split[1]);

  return firstNumber + secondNumber;
}
