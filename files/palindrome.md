# Palindrome

Return `true` if the given string is a palindrome. Otherwise, return `false`.

A *palindrome* is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Note**  
You'll need to remove *all non-alphanumeric characters* (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

## Code

```js
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
```

### Example
