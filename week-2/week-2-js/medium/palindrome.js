/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let filteredString = str
    .toLowerCase()
    .split("")
    .filter(
      (char) =>
        char !== "?" &&
        char !== " " &&
        char !== "!" &&
        char !== "." &&
        char !== ","
    )
    .join("");
  let left = 0;
  let right = filteredString.length - 1;
  while (left <= right) {
    if (filteredString[left] == filteredString[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
