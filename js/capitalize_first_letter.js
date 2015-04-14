function LetterCapitalize(str) {
  var word = str.split(" ");
  var capitalized =[];
  for(i = 0; i < word.length; i++){
    capitalized.push(word[i].toUpperCase().charAt(0) + word[i].slice(1));
  }
  return capitalized.join(" ");
}
console.log(LetterCapitalize("hello how are you?"));
