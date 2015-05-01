function Consecutive(arr) {
    var sorted = arr.sort(function (a, b) {
        return a - b
    });
    var smallestNum = sorted[0];
    var biggestNum = sorted.slice(-1);
    var wholeArray = [];
    for (var i = smallestNum; i <= biggestNum; i++) {
        wholeArray.push(i);
    }
    return wholeArray.length - sorted.length;
}
console.log(Consecutive([4, 8, 6]));
console.log(Consecutive([5, 10, 15]));
console.log(Consecutive([-2, 10, 4]));
