function DashInsert(str) {
  var res = str.toString().split("");
  var final="";
  for(i = 0; i < res.length; i++){
    final += res[i];
    if(res[i] % 2 == 1 && res[i+1] % 2 == 1){
      final += "-";
    }
  }
  return final;
}
console.log(DashInsert(9946));
console.log(DashInsert(56730));
console.log(DashInsert(1143697));
console.log(DashInsert(117));
console.log(DashInsert(11));
