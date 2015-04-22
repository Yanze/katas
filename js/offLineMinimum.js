function OffLineMinimum(strArr) {
    var myArray = [];
    var finalArray = [];
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/\d+/g)) {
            myArray.push(strArr[i]);
        } else {
            myArray.sort(function (a, b) {
                return a - b
            });
            finalArray.push(myArray.shift());
        }
    }
    return finalArray.join(",");
}

console.log(OffLineMinimum(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));
console.log(OffLineMinimum(["1", "2", "E", "E", "3"]));
console.log(OffLineMinimum(["4", "E", "1", "E", "2", "E", "3", "E"]));
