function Division(num1, num2) {
  var biggestFactors = [];
  var smallest = Math.min(num1, num2);
  for (var i = 0; i < smallest; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      biggestFactors.push(i);
    }
  }
  return biggestFactors.pop();
}
console.log(Division(18, 36));
