function PalindromeTwo(str) {
  var str1 = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(" ", "").split(" ").join("").toLowerCase().split("");
  var str2 = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(" ", "").split(" ").join("").toLowerCase().split("").reverse();
  return str1.toString() == str2.toString();
}
