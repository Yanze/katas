var size = 8;
var res = "";

for (k = 0; k < size; k++) {
  for (i = 0; i < size; i++) {
    if ((k+i) % 2 == 0) {
      res += " ";
    } else {
      res += "#";
    }
  }
  res += "\n";

}

console.log(res);
