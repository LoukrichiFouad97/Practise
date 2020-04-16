/**
 * Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string
 */
const comp = (str1, str2) => {
  const str1Array = str1.split("");
  const str2Array = str2.split("");
  if (str1Array.length === str2Array.length) {
    return true;
  } else {
    return false;
  }
};


console.log(comp("AB", "CD")) 
console.log(comp("ABC", "DE")) 
console.log(comp("hello", "edabit"))
