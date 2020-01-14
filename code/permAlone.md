# No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, `aab` should return 2 because it has 6 total permutations (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`), but only 2 of them (`aba` and `aba`) don't have the same letter (in this case `a`) repeating.

## Code

```js
function permAlone(str) {
  const regex = /(.)\1+/;
  const arr = str.split("");
  const permutations = [];
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  const generate = int => {
    if (int === 1) permutations.push(arr.join(""));
    else {
      for (let i = 0; i !== int; i++) {
        generate(int - 1);
        [arr[int % 2 ? 0 : i], arr[int - 1]] = [
          arr[int - 1],
          arr[int % 2 ? 0 : i]
        ];
      }
    }
  };
  generate(arr.length);
  return permutations.filter(string => !string.match(regex)).length;
}
```

### Example

`permAlone("aab")` should return 2.

`permAlone("abfdefa")` should return 2640.