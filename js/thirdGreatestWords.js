function ThirdGreatest(strArr) {
  var res = strArr.sort(function (a, b) {return b.length - a.length;});
  return res[2];
}

console.log(ThirdGreatest(["coder", "hey", "byte", "code"]));
