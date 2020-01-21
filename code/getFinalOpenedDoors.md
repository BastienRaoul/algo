# 100 doors

There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

## Code

```js
function getFinalOpenedDoors(numDoors) {
  let arr = [];
  let result = [];
  let visit = 1;
  for (let i = 0; i < numDoors; i++) arr.push(false);
  while (visit <= 100) {
    for (let i = visit - 1; i < arr.length; i += visit) {
      arr[i] ? (arr[i] = false) : (arr[i] = true);
    }
    visit++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) result.push(i + 1);
  }
  return result;
}
```

### Example

`getFinalOpenedDoors(100)` should return `[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`.