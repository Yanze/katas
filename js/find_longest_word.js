function LongestWord(sen) {
    var longest = "";
    var words = sen.split(" ");
    for (i = 0; i < words.length; i++) {
        if (longest.length < words[i].length) {
            longest = words[i];
        }
    }
    return longest;
};
var r = "Hello how r u today";
console.log(LongestWord(r));
