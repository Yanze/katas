function LongestWord(sen) {
    var wordClean = sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    var longest = "";
    for (i = 0; i < wordClean.length; i++) {
        if (longest.length < wordClean[i].length) {
            longest = wordClean[i];
        }
    }
    return longest;
}

console.log(LongestWord("hello hellohello oh,, sis"));
console.log(LongestWord("hello hellohello dongdoing oh,, sis"));
