# Cash Register

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

## Code

```js
function checkCashRegister(price, cash, cid) {
  let change = [];
  let cashInDrawer = 0;
  let index = 0;
  const currencyUnit = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
  };
  let changeToReturn = cash - price;
  let cidReverse = [...cid].reverse();
  cid.forEach(element => (cashInDrawer += element[1]));
  cashInDrawer = cashInDrawer.toFixed(2);
  if (cash - price == cashInDrawer) {
    return { status: "CLOSED", change: cid };
  } else if (changeToReturn > cashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    for (let key in currencyUnit) {
      let a = cidReverse.find(item => item[0] === key && item);
      if (currencyUnit[key] < changeToReturn) {
        while (changeToReturn - currencyUnit[key] >= 0 && a[1] > 0) {
          change.some(row => row.includes(key))
            ? (change[index][1] += currencyUnit[key])
            : change.push([key, currencyUnit[key]]);
          a[1] -= currencyUnit[key];
          changeToReturn -= currencyUnit[key];
          changeToReturn = changeToReturn.toFixed(2);
        }
        change.some(row => row.includes(key)) &&
          (change[index][1] = Number(change[index][1].toFixed(2)));
        change.length > 0 && index++;
      }
    }
  }
  if (changeToReturn >= 0.01) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: change };
  }
}
```

### Example

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` should return `{status: "OPEN", change: [["QUARTER", 0.5]]}`.

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` should return `{status: "INSUFFICIENT_FUNDS", change: []}`.
