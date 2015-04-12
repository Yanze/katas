function convertDegree(string){
    var character = string.split('').pop().toUpperCase();
    var number = parseInt(string);
    if(character === "F"){
        var res = (number - 32) * 5/9;
        return res;
    }
    else if(character === "C"){
        var res = number * 9/5 + 32;
        return res;
    }
}
var res = convertDegree("70F");
