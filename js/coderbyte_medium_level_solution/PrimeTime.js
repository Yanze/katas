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
