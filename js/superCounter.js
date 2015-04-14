function superCounter(str) {
    var strNum = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var words = strNum.split(" ");
    var words_clean = [];
    for (i = 0; i < words.length; i++) {
        if (words[i] != "") {
            words_clean.push(words[i]);
        }
    }
    var wordsNum = words_clean.length;
    var charNum = str.length;
    var spaceNum = 0;

    for (i = 0; i < strNum.length; i++) {
        if (strNum[i] == " ") {
            spaceNum++;
        }
    }
    var avg_words_length = 0;
    for (i = 0; i < words_clean.length; i++) {
        avg_words_length += words_clean[i].length;
    }
    if (words_clean.length > 0) {
        avg_words_length = avg_words_length / words_clean.length;
    }
    return {
        words: wordsNum,
        characters: charNum,
        avg_word_length: avg_words_length,
        spaces: spaceNum
    }
}
//1. Exemple given
console.log(superCounter("Count me in"));

//2. Empty String
console.log(superCounter(""));

//3. Space at the beginning and the end
console.log(superCounter(" hello "));

//4. lots of space only
console.log(superCounter("      "));

//5. with punctuations
console.log(superCounter("hello,"));
