function ExOh(str) {
    var x = 0;
    var o = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            x++;
        } else {
            o++;
        }
    }
    return x === o;
}
