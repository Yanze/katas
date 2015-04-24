function PalindromeTwo(str) {
  var arrayClean = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  .toLowerCase()
  .replace(" ", "")
  .split("");

  return arrayClean.toString() == arrayClean.reverse().toString();
}
console.log(PalindromeTwo("Noel - sees Leon"));
console.log(PalindromeTwo("A war at Traa!"));
