function PrimeMover(num) {
  var prime = [];
    //find la list of the prime numbers
    for (var i = 0; i < 10000; i++) {
      if (isPrime(i)) {
        prime.push(i);
      }
    }
    return prime[num-1];
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
  console.log(PrimeMover(100));
  console.log(PrimeMover(9));
  console.log(PrimeMover(20));



//another way
  var primeObject = {
    primeArray: [],
    initPrimeArray: function () {
        //find la list of the prime numbers
        for (var i = 0; i < 10000; i++) {
          if (this.isPrime(i)) {
            this.primeArray.push(i);
          }
        }
      },
      isPrime: function (num) {
        if (num < 2 || num != Math.round(num)) {
          return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i == 0) {
            return false;
          }
        }
        return true;
      },
      primeMover: function (num) {
        return this.primeArray[num - 1];
      }
    };

// On initialise la liste des nombre premiers uniquement 1 fois.
primeObject.initPrimeArray();

console.log(primeObject.primeMover(100));
console.log(primeObject.primeMover(9));
console.log(primeObject.primeMover(20));
