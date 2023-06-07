const value1 = moneyFormat(19.99);
console.log(value1); // $19.99

const value2 = moneyFormat(250);
console.log(value2); // $250.00

const value3 = moneyFormat(9500.95);
console.log(value3); // $9,500.95

/**
 *
 * @param {number} amount
 * @returns
 */
function moneyFormat(amount) {
  return "$" + amount.toFixed(2);
}
