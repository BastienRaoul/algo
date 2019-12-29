const data = [
  {
    "name": "Palindrome Checker",
    "function": `function palindrome(str) {
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
    }`
  },
  {
    "name": "Roman Numeral Converter",
    "function": `function convertToRoman(num) {
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
    }`
  },
  {
    "name": "Caesars Cipher",
    "function": `function rot13(str) {
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
    }`
  },
  {
    "name": "Even Fibonacci Numbers",
    "function": `function fiboEvenSum(n) {
      let table = [1, 2];
      for (let i = 2; i < n; i++) table.push(table[i - 2] + table[i - 1]);
      return table.filter(a => a % 2 === 0).reduce((a, b) => a + b);
    }`
  },
  {
    "name": "Telephone US Number Validator",
    "function": `function telephoneCheck(str) {
      const regex = /^(1\s?)?((\(\d{3}\)\s?)|(\d{3}-?\s?))\d{3}-?\s?\d{4}$/gm;
      return str.match(regex) ? true : false;
    }`
  },
  {
    "name": "Multiples of 3 and 5",
    "function": `function multiplesOf3and5(number) {
      let set = new Set();
      for (let i = 3; i < number; i += 3) set.add(i);
      for (let i = 5; i < number; i += 5) set.add(i);
      return [...set].reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }`
  }
];
