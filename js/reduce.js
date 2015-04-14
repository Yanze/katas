var sum = function(element){
  var total = element.reduce(function(a,b){return a+b});
  return total
}

var nums = [1,2,3,4,5,6]
console.log(sum(nums));
