// Problem:1 Revere String
function reverseString(str) {
  const rs = str.split("").reverse();
  const reversStr = rs.join("");
  //   return reversStr;
  //   console.log(reversStr);
}

// reverseString("Hello");

// Problem: 2 Count Vowels in a String
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  const string = str.toLowerCase();

  for (let char of string) {
    if (vowels.includes(char)) count++;
  }
  //   return count
  //   console.log(count);
}
// countVowels("programming");

// Problem: 3 Check for Palindrome
function checkPalindrome(str) {
  const string = str.toLowerCase();
  const reversStr = string.split("").reverse().join("");
  if (string === reversStr) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
}
// console.log(checkPalindrome("Madam"));

//Problem: 04 Find the Maximum Number
function MaxNum(arr) {
  const max = Math.max(...arr);
  //   console.log(max);
  return max;
}
// MaxNum([1, 2, 4, 6]);

// Problem 5: Remove Duplicates from an Array
function removeDuplicate() {}
// removeDuplicate([2, 3, 2, 4, 6, 3]);

//Problem 6: Sum of All Numbers in an Array
function sumArr(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  //   console.log(sum);
  return sum;
}
// sumArr([2, 5, 6, 4]);

//Problem 7: Find Even Numbers in an Array
function evenNum(numbers) {
  const filternum = numbers.filter((num) => num % 2 === 0);
  //   console.log(filternum);
  return filternum;
}
// evenNum([1, 4, 2, 6, 9]);

// Problem 8: Capitalize First Letter of Each Word
function capiLetter(str) {}
capiLetter("welcome to chandpur")
