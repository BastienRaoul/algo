# Implement Merge Sort

Merge sort use a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

**Instructions:** Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

## Code

```js
function mergeSort(array) {
  if (array.length <= 1) return array;
  const pivot = Math.floor(array.length / 2);
  const start = array.slice(0, pivot);
  const end = array.slice(pivot);
  const merge = (start, end) => {
    let resultArray = [];
    let startIndex = 0;
    let endIndex = 0;
    while (startIndex < start.length && endIndex < end.length) {
      if (start[startIndex] < end[endIndex]) {
        resultArray.push(start[startIndex]);
        startIndex++;
      } else {
        resultArray.push(end[endIndex]);
        endIndex++;
      }
    }
    return resultArray
      .concat(start.slice(startIndex))
      .concat(end.slice(endIndex));
  };
  return merge(mergeSort(start), mergeSort(end));
}
```

### Example

`mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])`