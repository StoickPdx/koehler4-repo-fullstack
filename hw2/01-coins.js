/** Exercise 01 - Coins **/

const pluralize = (num, plural, single) => {
  return num > 1 ? plural : single;
};
const calculateChange = (input) => {
  // Add your code here
  if (input === 0) return "No Change Required";

  let curChange = input;
  let curDollar = Math.floor(curChange / 1);
  curChange -= curDollar * 1;
  let curQtr = Math.floor(curChange / 0.25);
  curChange -= curQtr * 0.25;
  let curDime = Math.floor(curChange / 0.1);
  curChange -= curDime * 0.1;
  let curNickel = Math.floor(curChange / 0.05);
  curChange -= curNickel * 0.05;
  let curPenny = Math.ceil(curChange / 0.01);
  curChange -= curPenny * 0.01;

  return (
    "input" +
    " ==> " +
    curDollar +
    pluralize(curDollar, " dollars, ", " dollar, ") +
    curQtr +
    pluralize(curQtr, " quarters, ", " quarter, ") +
    curDime +
    pluralize(curDime, " dimes, ", " dime, ") +
    curNickel +
    pluralize(curNickel, " nickels, ", " nickel, ") +
    curPenny +
    pluralize(curPenny, " pennies.", " penny.")
  );
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
