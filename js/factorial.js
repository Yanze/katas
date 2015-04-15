function FirstFactorial(num) {
  var res = 1;
  for(i = num; i>0; i--){
    res *= i;
    num = res; //????
  }
  return num;
}
console.log(FirstFactorial(6));

