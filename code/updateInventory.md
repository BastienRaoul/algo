# Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

## Code

```js
function updateInventory(arr1, arr2) {
  let arr = [];
  arr1.forEach(element1 => {
    arr2.forEach(element2 => {
      if (element1[1] === element2[1]) {
        arr1[arr1.indexOf(element1)][0] += element2[0];
        arr.push(arr2[arr2.indexOf(element2)]);
      }
    });
  });
  arr2.forEach(element => {
    !arr.includes(element) && arr1.push(element);
  });
  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}
```

### Example

`updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` should return `[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]`.

`updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])` should return `[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]`.