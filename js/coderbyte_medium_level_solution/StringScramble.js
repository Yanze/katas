function StringScramble(str1, str2) {
    var allChars = "";
    for (var i = 0; i < str2.length; i++) {
        for (var k = 0; k < str1.length; k++) {
            if (str2[i] === str1[k]) {
                allChars += str1[k];
                str1 = str1.replace(str1[k], "");
                break;
            }
        }
    }
    if (allChars === str2) {
        return true;
    } else {
        return false;
    }

}
console.log(StringScramble("coodrebtqqkye", "coderbyte"));
console.log(StringScramble("winlllwesr", "winner"));
