function PowersofTwo(num){
  if(num != 0 && (num & (num - 1)) == 0){
    return true;
  }
  else {
    return false;
  }
}
console.log(isPowOfTwo(124));


//second way
function powerOfTwo(num) {
  var count = 0;
  var pow = 1;
  for (var i = pow; pow < num; i++) {
    count++;
    pow = Math.pow(2, count);
  }
  return pow === num;
}

// OR use while
function PowersofTwo(num) {
  var count = 0;
  var pow = 1;
  while (pow < num) {
    count++;
    pow = Math.pow(2, count);
  }
  return (pow === num);
}


