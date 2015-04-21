function DivisionStringified(num1, num2) {
  var res = Math.round(num1 / num2);
  if (res.toString().length > 3) {
    return res.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return res;
  }
}
