function LetterCountI(phrase){
  var words = phrase.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
  var longestWord;
  var maxFound = 0;
  for(var i = 0 ; i < words.length; i++){
    var currentWord = words[i];
    var maxNumber = maxLetter(currentWord);
    if(maxNumber > maxFound ){
      maxFound = maxNumber;
      longestWord = currentWord;
    }
  }
  if(maxFound == 1){
    return -1;
  }
  return longestWord;
}

function maxLetter(word) {
  var charCounter = {};
  var maxNumber = 0;
  for (var i = 0; i < word.length; i++) {
    var currentChar = word[i];
    if (charCounter[currentChar]) {
      charCounter[currentChar]++;
    } else {
      charCounter[currentChar] = 1;
    }

    if (maxNumber < charCounter[currentChar]) {
      maxNumber = charCounter[currentChar];
    }
  }

  return maxNumber;
}


console.log(LetterCountI("helo how are you"));
    //console.log(LetterCountI("Hello apple pie"));
    //console.log(LetterCountI("Hello world"));
    //console.log(LetterCountI("No words!"));
   // console.log(LetterCountI("Today, is the greatest day ever!"));
