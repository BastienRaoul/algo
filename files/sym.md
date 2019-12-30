# Sym

Create a function that takes two or more arrays and returns an array of the *symmetric difference* (`△` or `⊕`) of the provided arrays.

Given two sets (for example set `A = {1, 2, 3}` and set `B = {2, 3, 4}`), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (`A △ B = C = {1, 4}`). For every additional symmetric difference you take (say on a set `D = {2, 3}`), you should get the set with elements which are in either of the two the sets but not both (`C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}`). The resulting array must contain only unique values (*no duplicates*).

## Code

```js
function sym(arr1, arr2) {
  function filterFunction(arr1, arr2) {
    return arr1.filter(item => {
      return arr2.indexOf(item) === -1;
    });
  }
  return filterFunction(arr1, arr2)
    .concat(filterFunction(arr2, arr1))
    .filter((item, idx, arr) => {
      return arr.indexOf(item) === idx;
    });
}
```

### Example
