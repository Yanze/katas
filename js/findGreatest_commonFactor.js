function greatestCommonFactor(x, y) {
  return y == 0 ? x : greatestCommonFactor(y, x % y);
}

//2nd way
function greatestCommonFactor(x, y) {
    var min = Math.min(x, y);
    for (var i = min; i > 0; i--) {
        if (x % i == 0 && y % i == 0) {
            return i;
        }
    }
}


