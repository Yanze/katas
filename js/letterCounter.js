function LetterCountI(str) {
    var longgestWord;
    var maxFound = 0;
    var cleanStr = str.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    for (var i = 0; i < cleanStr.length; i++) {
        var current = cleanStr[i];
        var CharmaxNumber = charCounter(current);
        if (maxFound < CharmaxNumber) {
            maxFound = CharmaxNumber;
            longgestWord = current;
        }
    }
    if (maxFound == 1) {
        return -1;
    }
    return longgestWord;
}

function charCounter(word) {
    var maxCharNum = 0;
    var counter = {};
    for (var i = 0; i < word.length; i++) {
        var current = word[i];
        if (counter[current]) {
            counter[current]++;
        } else {
            counter[current] = 1;
        }
        if (maxCharNum < counter[current]) {
            maxCharNum = counter[current];
        }
    }
    return maxCharNum;
}
