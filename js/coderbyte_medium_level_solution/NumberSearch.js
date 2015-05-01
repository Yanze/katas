function NumberSearch(str) {
    var letters = str.split(" ").join("").replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/[0-9]/g, '');
    var number = str.match(/\d+/g);
    if (number == null) {
        return 0;
    } else {
        var total = number.reduce(function (a, b) {
            return Number(a) + Number(b)
        });
        return Math.round(total / letters.length);
    }
}
console.log(NumberSearch("Two numbers"));
console.log(NumberSearch("Hello6 9World 2, Nic8e D7ay!"));
