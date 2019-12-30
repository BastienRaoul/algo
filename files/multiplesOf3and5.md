# Multiples Of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value `number`.

## Code

```js
function multiplesOf3and5(number) {
  let set = new Set();
  for (let i = 3; i < number; i += 3) set.add(i);
  for (let i = 5; i < number; i += 5) set.add(i);
  return [...set].reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
```

### Example
