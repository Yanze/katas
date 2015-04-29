function OffLineMinimum(strArr) {
    var myArray = [];
    var final = [];
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === "E") {
            myArray.sort(function (a, b) {
                return a - b;
            });
            final.push(myArray.shift());
        } else {
            myArray.push(strArr[i]);
        }
    }
    return final.join();
}

console.log(OffLineMinimum(["1", "2", "E", "E", "3"]));
console.log(OffLineMinimum(["4", "E", "1", "E", "2", "E", "3", "E"]));
console.log(OffLineMinimum(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));
