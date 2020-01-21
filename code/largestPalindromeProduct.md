# Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two `n`-digit numbers.

## Code

```js
function largestPalindromeProduct(n) {
  let palindrome = 0;
  let i = "1";
  for (let k = 0; k < n; k++) i += 0;
  while (i--) {
    let j = "1";
    for (let k = 0; k < n; k++) j += 0;
    while (j--) {
      let prod = i * j;
      if (prod.toString() === prod.toString().split("").reverse().join("")) {
        if (prod > palindrome) palindrome = prod;
      }
    }
  }
  return palindrome;
}
```

### Example

`largestPalindromeProduct(2)` should return 9009.

`largestPalindromeProduct(3)` should return 906609.