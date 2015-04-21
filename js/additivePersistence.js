function AdditivePersistence(num) {
    var loop = 0;
    var numbers = num.toString(10).split("").map(function (t) {
        return parseInt(t);
    });
    while (numbers.length > 1) {
        var res = 0;
        res += numbers.reduce(function (a, b) {
            return a + b;
        });
        numbers = res.toString().split("").map(function (t) {
            return parseInt(t);
        });
        loop++;
    }

    return loop;
}


//second way

function AdditivePersistence(num) {
    var loop = 0;
    var numbers = num.toString();
    while (numbers.length > 1) {
        var res = 0;
        res += numbers.split('').reduce(function (a, b) {
            return Number(a) + Number(b)
        });
        numbers = res.toString();
        loop++;
    }

    return loop;
}

console.log(AdditivePersistence(2718));
console.log(AdditivePersistence(4));
console.log(AdditivePersistence(19));
