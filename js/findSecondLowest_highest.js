function SecondGreatLow(arr) {
    var res = arr.sort(function (a, b) {
        return a - b
    });
    var lastPosition = res.length - 1;
    var lowest = res[0];
    var highest = res[lastPosition];

    var secondLowest = lowest;
    var secondHighest = highest;

    var isSecondLowestFound = false;
    var isSecondHighestFound = false;

    for (var i = 0; i < res.length; i++) {
        if (isSecondLowestFound && isSecondHighestFound) {
            break;
        }

        if (res[i] > lowest && !isSecondLowestFound) {
            secondLowest = res[i];
            isSecondLowestFound = true;
        }
        if (res[lastPosition - i] != highest && !isSecondHighestFound) {
            secondHighest = res[lastPosition - i];
            isSecondHighestFound = true;
        }
    }

    return secondLowest + " " + secondHighest;
}

var arr = [7, 7, 10, 12, 12];


console.log(SecondGreatLow(arr));
