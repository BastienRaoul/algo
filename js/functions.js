function palindrome(str) {
  const RESULT = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const TABLE = RESULT.split("");
  let tableLength = 0;
  let tableLengthHalf = 0;
  let tableFirstHalf = [];
  let tableSecondHalf = [];
  tableLength = TABLE.length;
  tableLengthHalf = Math.floor(tableLength / 2);
  tableFirstHalf = TABLE.slice(0, tableLengthHalf);
  tableSecondHalf =
    RESULT.length % 2
      ? TABLE.slice(tableLengthHalf + 1).reverse()
      : TABLE.slice(tableLengthHalf).reverse();
  for (let i = 0; i <= tableLengthHalf; i++) {
    if (!(tableFirstHalf[i] === tableSecondHalf[i])) {
      return false;
    }
  }
  return true;
}

function convertToRoman(num) {
  let roman = "";
  let a;
  const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  for (let key in romanNumList) {
    a = Math.floor(num / romanNumList[key]);
    if (a >= 0) {
      for (let i = 0; i < a; i++) roman += key;
    }
    num = num % romanNumList[key];
  }
  return roman;
}

function rot13(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  let result = [];
  for (let element in str) {
    const rot13 = alphabet.indexOf(str[element]) + 13;
    !str[element].match(/^[0-9a-zA-Z]+$/)
      ? result.push(str[element])
      : rot13 < alphabet.length
        ? result.push(alphabet[rot13])
        : result.push(
          alphabet[alphabet.indexOf(str[element]) + 13 - alphabet.length]
        );
  }
  return result.join("");
}

function fiboEvenSum(n) {
  let table = [1, 2];
  for (let i = 2; i < n; i++) table.push(table[i - 2] + table[i - 1]);
  return table.filter(a => a % 2 === 0).reduce((a, b) => a + b);
}

function telephoneCheck(str) {
  const regex = /^(1\s?)?((\(\d{3}\)\s?)|(\d{3}-?\s?))\d{3}-?\s?\d{4}$/gm;
  return str.match(regex) ? true : false;
}

// function checkCashRegister(price, cash, cid) {
//   let change = [];
//   let cashInDrawer = 0;
//   let index = 0;
//   const currencyUnit = {
//     "ONE HUNDRED": 100,
//     TWENTY: 20,
//     TEN: 10,
//     FIVE: 5,
//     ONE: 1,
//     QUARTER: 0.25,
//     DIME: 0.1,
//     NICKEL: 0.05,
//     PENNY: 0.01
//   };
//   let changeToReturn = cash - price;
//   let cidReverse = [...cid].reverse();
//   cid.forEach(element => (cashInDrawer += element[1]));
//   cashInDrawer = cashInDrawer.toFixed(2);
//   if (cash - price == cashInDrawer) {
//     return { status: "CLOSED", change: cid };
//   } else if (changeToReturn > cashInDrawer) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   } else {
//     for (let key in currencyUnit) {
//       let a = cidReverse.find(item => item[0] === key && item);
//       if (currencyUnit[key] < changeToReturn) {
//         while (changeToReturn - currencyUnit[key] >= 0 && a[1] > 0) {
//           change.some(row => row.includes(key))
//             ? (change[index][1] += currencyUnit[key])
//             : change.push([key, currencyUnit[key]]);
//           a[1] -= currencyUnit[key];
//           changeToReturn -= currencyUnit[key];
//           changeToReturn = changeToReturn.toFixed(2);
//         }
//         change.some(row => row.includes(key)) &&
//           (change[index][1] = Number(change[index][1].toFixed(2)));
//         change.length > 0 && index++;
//       }
//     }
//   }
//   if (changeToReturn >= 0.01) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   } else {
//     return { status: "OPEN", change: change };
//   }
// }

function multiplesOf3and5(number) {
  let set = new Set();
  for (let i = 3; i < number; i += 3) set.add(i);
  for (let i = 5; i < number; i += 5) set.add(i);
  return [...set].reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}