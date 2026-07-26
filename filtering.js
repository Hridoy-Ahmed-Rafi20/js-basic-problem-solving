//Problem: Filter a value from data

// without function
// way 1
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let filterValue = 45;
let filteredData = [];

for (let i of arr) {
  if (i > filterValue) {
    filteredData.push(i);
  }
}
// console.log(filteredData);

// way-2
let value = 52;
let filteredVal = [];

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] > value) {
    filteredVal.push(arr[i]);
  }
}
// console.log(filteredVal);

// with function
// way-1

let data = [10, 20, 30, 40, 50, 60, 70, 80];
let filter = 8;

function filterData(filteringData, filterValue) {
  let filteredList = [];
  for (let value of filteringData) {
    if (value > filterValue) {
      filteredList.push(value);
    }
  }
  return filteredList;
}
console.log(`Filtered Data: ${filterData(data, filter)}`);

// way -2

let filterNumber = 19;
function filtering(data, value) {
  let filteredValue = [];
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i] > filterNumber) {
      filteredValue.push(data[i]);
    }
  }
  return filteredValue;
}
console.log(`Filtered Value: ${filtering(data, filterNumber)}`);
