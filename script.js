// Problem:1 Revere String
function reverseString(str) {
  const reversStr = str.split("").reverse().join("");
  return reversStr;
  //   console.log(reversStr);
}
reverseString("hello");

// Problem: 2 Count Vowels in a String
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  const string = str.toLowerCase();

  for (let char of string) {
    if (vowels.includes(char)) count++;
  }
  return count;
  // console.log(count);
}
countVowels("programming");

// Problem: 3 Check for Palindrome
function checkPalindrome(str) {
  const string = str.toLowerCase();
  const reversStr = string.split("").reverse().join("");
  if (string === reversStr) {
    return true;
  } else {
    return false;
  }
}
checkPalindrome("Madam");

//Problem: 04 Find the Maximum Number
function MaxNum(arr) {
  const max = Math.max(...arr);
  // console.log(max);
  return max;
}
MaxNum([1, 2, 4, 6]);

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(numbers) {
  let uniqueArr = [];

  numbers.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });

  return uniqueArr;
  // console.log(uniqueArr);
  
}
removeDuplicates([1, 2, 2, 3, 4, 4]);

//Problem 6: Sum of All Numbers in an Array
function sumArr(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
    // sum = sum + number;
  });
  // console.log(sum);
  return sum;
}
sumArr([2, 5, 6, 4]);

//Problem 7: Find Even Numbers in an Array
function evenNum(numbers) {
  const filternum = numbers.filter((num) => num % 2 === 0);
  // console.log(filternum);
  return filternum;
}
evenNum([1, 4, 2, 6, 9]);


// Problem 8: Capitalize First Letter of Each Word
function capitalizedWords(sentece) {
  let words = sentece.split(" ");
  let capiWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
    // console.log(word);
  });
  return capiWords.join(" ");
  // console.log(capiWords);
}
capitalizedWords("welcome to chandpur");

// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
  // console.log(result);
}
factorial(6);
// Problem 10: PingPong Challenge
function pingPong(n) {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
pingPong();
