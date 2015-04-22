function LongestWord(sen) {
  var cleanStr = sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var words = cleanStr.split(" ");
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (longest.length < words[i].length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(LongestWord("I love dogs"));
console.log(LongestWord("fun&!! time"));
