function LetterChanges(str) {
    var letters = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            var nextChar = nextLetter(str[i]);
            if (nextChar === "a" || nextChar === "e" || nextChar === "i" || nextChar === "o" || nextChar === "u") {
                var Capitalized = nextChar.toUpperCase();
                letters += Capitalized;
            } else {
                letters += nextChar;
            }
        } else {
            letters += str[i];
        }
    }
    return letters;
}
function nextLetter(letter) {
    var foundNextChar = String.fromCharCode(letter.charCodeAt(0) + 1);
    return foundNextChar;
}

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));
