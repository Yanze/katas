function LetterCapitalize(str) { //?????
  var word = str.split(" ");
  var capitalized =[];
  for(i = 0; i < word.length; i++){
    capitalized.push(word[i].toUpperCase().charAt(0) + word[i].slice(1));
  }
  return capitalized.join(" ");
}
console.log(LetterCapitalize("hello how are you?"));


//2nd

function LetterCapitalize(str) {
  var string = str.split(" ");
  var letters = [];
  for (var i = 0; i < string.length; i++) {
    var firstLetter = string[i].slice(0, 1).toUpperCase();
    letters.push(firstLetter + string[i].slice(1));
  }
  return letters.join(" ");
}

// string capitalize method
String.prototype.toJadenCase = function () {
    var myArr = this.split(" ");
    var final = [];
    for (var i = 0; i < myArr.length; i++) {
        final.push(myArr[i].toUpperCase().charAt(0) + myArr[i].slice(1));
    }
    return final.join(" ");
}

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
