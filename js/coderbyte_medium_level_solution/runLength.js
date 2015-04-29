function RunLength(str) {
    var letterCounter = "";
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i]) {
            counter++;
        }
        if (str[i + 1] !== str[i]) {
            letterCounter += counter + str[i];
            counter = 0;
        }

    }
    return letterCounter;
}
console.log(RunLength("aabbcde")); //2a2b1c1d1e
console.log(RunLength("wwwbbbw")); //3w3b1w
