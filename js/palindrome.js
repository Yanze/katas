function palindrome(str) {
  return (str == str.split("").reverse().join(""));
}
//console.log(palindrome("civic"));

// second way
function palindrome2(str) {
  var res = "";
  for (i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return str == res;
}
console.log(palindrome2("civic"));
