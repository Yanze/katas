function SimpleMode(arr) {
    var allNum = {};
    var max = 0;
    var mostRepeatedWord = "";
    var sorted = arr.sort(function (a, b) {
        return a - b
    });
    for (var i = 0; i < sorted.length; i++) {
        var current = sorted[i];
        if (allNum[current]) {
            allNum[current]++;
        } else {
            allNum[current] = 1;
        }
        if (max < allNum[current]) {
            max = allNum[current];
            mostRepeatedWord = current;
        }
    }
    if (max == 1) {
        return -1;
    } else {
        return mostRepeatedWord;
    }
}


console.log(SimpleMode([10, 5, 2, 4]));
console.log(SimpleMode([5, 10, 10, 6, 5]));
