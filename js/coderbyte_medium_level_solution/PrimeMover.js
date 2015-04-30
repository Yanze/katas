function PrimeTime(number) {
  var prime = [];
    //find la list of the prime numbers
    for (var i = 0; i < 10000; i++) {
      if (isPrime(i)) {
        prime.push(i);
      }
    }
    //if number is prime number, find its index
    if (isPrime(number)) {
      return prime.indexOf(number) + 1;
    } else {
      return "This is not a prime number";
    }
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


  console.log(PrimeTime(541));
