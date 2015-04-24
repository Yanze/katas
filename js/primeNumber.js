function PrimeTime(num) {
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
console.log(PrimeTime(1));
console.log(PrimeTime(110));
console.log(PrimeTime(19));
console.log(PrimeTime(2));
console.log(PrimeTime(200));
