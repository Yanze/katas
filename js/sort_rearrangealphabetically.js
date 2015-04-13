//from a to z
function sort_A_to_Z(string){
  return string.split('').sort().join('');
}

//form z to a
function sort_Z_to_A(string){
  return string.split('').sort().reverse().join('');
}

var res = sort_Z_to_A("bacdhujs");
console.log(res);
