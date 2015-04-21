function NumberAddition(str) {
  var numbers = str.match(/\d+/g);
  var res = 0;
  for(var i = 0; i < numbers.length; i++){
    res += Number(numbers[i]);
  }
  return res;
}

//second way
function NumberAddition(str) {
  var res = str.match(/\d+/g);
  var total = res.reduce(function(a,b){return Number(a)+Number(b);});
  return total;
}
console.log(NumberAddition("88Hello 3World!"));
console.log(NumberAddition("75Number9"));
console.log(NumberAddition("55Hello"));
console.log(NumberAddition("5Hello 5"));
