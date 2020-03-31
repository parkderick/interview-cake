// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

function mergeSortedArray (arr1, arr2) {
  var result = [];
  var arr1Index = 0;
  var arr2Index = 0;
  while (arr1Index !== arr1.length || arr2Index !== arr2.length) {
    console.log(arr2Index, arr2[arr2Index])
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else if (arr1[arr1Index] > arr2[arr2Index]) {
      result.push(arr2[arr2Index]);
      arr2Index++;
    } else if (arr1[arr1Index] === arr2[arr2Index]) {
      result.push(arr1[arr1Index]); 
      result.push(arr2[arr2Index]);
      arr1Index++;
      arr2Index++;
    } else if (!arr1[arr1Index]) {
      result.push(arr2[arr2Index]);
      arr2Index++;
    } else if (!arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    }
  }
  return result;
}

// Time: O(n);
// Space: O(n);

// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 13, 14, 15, 19];

const myArray = [6, 8, 11, 15];
const alicesArray = [1, 2, 3, 4, 5, 6, 15, 19];
console.log(mergeSortedArray(myArray, alicesArray));