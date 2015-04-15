function convert(num) {
  var hour = Math.floor(num / 60);
  var min = num - hour * 60
  return hour + ":" + min;
}
console.log(convert(190)); //3:10
console.log(convert(40)); //0:40
console.log(convert(390)); //6:30
