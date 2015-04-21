//find the mode number, then if mode equals to mean, return 1, else return 0;

function MeanMode(arr) {
    var modeNum = {};
    var max = 0,
    count = 0;
    for (i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (modeNum[current]) {
            modeNum[current]++;
        } else {
            modeNum[current] = 1;
        }
        if (count < modeNum[current]) {
            max = current;
            count = modeNum[current];
        }
    }
    var ress = arr.reduce(function (a, b) {
        return a + b
    });
    if (max == ress / arr.length) {
        return 1;
    } else {
        return 0;
    }
}



//second way, without reduce function
function MeanMode(arr) {
    var modeNum = {};
    var max = 0,
    count = 0,
    total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
        var current = arr[i];
        if (modeNum[current]) {
            modeNum[current]++;
        } else {
            modeNum[current] = 1;
        }
        if (count < modeNum[current]) {
            max = current;
            count = modeNum[current];
        }
    }
    if (max == total / arr.length) {
        return 1;
    } else {
        return 0;
    }
}

console.log(MeanMode([5, 3, 3, 3, 1]));
console.log(MeanMode([1, 2, 3]));
console.log(MeanMode([4, 4, 4, 6, 2]));
