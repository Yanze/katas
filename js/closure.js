var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery(input) {
    var secret = 4;
    input += 2;

    function mystery2(multiplier) {
        multiplier *= input;
        return secret * multiplier;
    }
    return mystery2;
}

function mystery3(param) {
    function mystery4(bonus) {
        return param(6) + bonus;
    }
    return mystery4;
}









function makeMysteryFunction(makerValue){
  var newFunction = function doMysteriousThing(param)
  {
    return makerValue + param;
};
return newFunction;
}

var mysteryFunction3 = makeMysteryFunction(3);
var mysteryFunction5 = makeMysteryFunction(5);

mysteryFunction3(10) + mysteryFunction5(5) // 23
