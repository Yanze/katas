function BracketMatcher(str) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            counter++;
        } else if (str[i] == ")") {
            counter--;
        }

        if (counter < 0) {
            return 0;
        }

    }
    if (counter == 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(BracketMatcher(")(hello)("));
console.log(BracketMatcher("(c(oder)) b(yte)"));
console.log(BracketMatcher("(coder)(byte))"));
console.log(BracketMatcher("coderbyte"));
