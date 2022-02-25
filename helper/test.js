/* eslint-disable */

/* Reverse String */
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  if (str == newString) {
    return { newString, palindrome: true };
  }
  return { newString, palindrome: false };
}

/* Matching Characters */

function matchingCharactersInAString(str1, str2, matching) {
  let highestLen;
  if (str1.length > str2.length) {
    highestLen = str1;
  } else {
    highestLen = str2;
  }
  let matchingChr = "";
  for (let i = 0; i < highestLen.length; i++) {
    if (matching) {
      if (str1[i] == str2[i]) matchingChr += highestLen[i];
    } else {
      if (str1[i] != str2[i]) matchingChr += highestLen[i];
    }
  }
  return matchingChr;
}

/**
 * Deleted Repeated Element in an integer array
 */

function deletedReapeatedElementFromAnArray(arr) {
  const copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!copyArr.includes(arr[i])) {
      copyArr.push(arr[i]);
    }
  }
  return copyArr;
}

/**
 * Find Smallest and largest element in an integer array
 */

function findSmallestAndLargestElement(arr) {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { largest, smallest };
}

/*
    Febonacci serires
*/
function febonacciSeries(len) {
  let febo1 = 0;
  let febo2 = 1;
  for (let i = 0; i < len; i++) {
    console.log(febo1);
    let next = febo1 + febo2;
    febo1 = febo2;
    febo2 = next;
  }
}

/*
    Star Pattern
*/
function rightStarPattern(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
function downgradeStarPattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n - i; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
function leftStarPatter(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
// console.log(reverseString("hello world"));
// console.log(
//   matchingCharactersInAString("Hey this is israr", "Hey this is ", true)
// );

// console.log(findSmallestAndLargestElement([1, 2, 5, 7, 8, 9, 123, 3]));
// febonacciSeries(10);
console.log(rightStarPattern(10));
console.log(downgradeStarPattern(10));
console.log(leftStarPatter(12));
