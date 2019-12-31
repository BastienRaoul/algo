# Roman Numeral Converter

Convert the given number into a roman numeral.

All [roman numerals](https://www.mathsisfun.com/roman-numerals.html) answers should be provided in upper-case.

## Code

```js
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
```

### Example

`convertToRoman(4)` should return "IV".

`convertToRoman(649)` should return "DCXLIX".