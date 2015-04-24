function ArrayAdditionI(arr) {
    var sortedNum = arr.sort(function (a, b) {
        return a - b
    });
    var biggestNum = sortedNum.pop();
    var sum = sortedNum.reduce(function (a, b) {
        return a + b
    });
    for (var i = 0; i < sortedNum.length; i++) {
        if (sum - sortedNum[i] === biggestNum) {
            return true;
        }
        if (sum === biggestNum) {
            return true;
        }
    }
    return false;
}


console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
console.log(ArrayAdditionI([3, 5, -1, 8, 12]));
console.log(ArrayAdditionI([5,7,16,1,2]));
