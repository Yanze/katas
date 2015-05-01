//find prime number til 10^4;

function findPrime() {
  var prime = [];
  for (var i = 0; i < 10000; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

function isPrime(num) {
  if (num < 2 || num != Math.round(num)) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(findPrime());
