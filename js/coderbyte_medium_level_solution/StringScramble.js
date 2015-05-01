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
    return allChars === str2;
}


//another way

function StringScramble2(str1, str2) {
    var str1Array = str1.split("");
    for (var i = 0; i < str2.length; i++) {
        var pos = str1Array.indexOf(str2[i]);
        str1Array.splice(pos, 1);
        if(pos === -1){
            return false;
        }
    }
    return true;
}

console.log(StringScramble("coodrebtqqkye", "coderbyte"));
console.log(StringScramble("winlllwesr", "winner"));
