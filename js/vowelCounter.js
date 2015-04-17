function VowelCount(str) {
  var vowelNum = 0;
  for (i = 0; i<str.length; i++){
    if(str[i] === "a" || str[i] === "e" ||str[i] === "i" ||str[i] === "o" || str[i]==="u"){
      vowelNum++;
    }
  }
  return vowelNum;
}


//second way
function VowelCount(str) {
  var vowels = str.match(/[aeiou]/g);
  return vowels.length;
}

console.log(VowelCount("hello"));
console.log(VowelCount("coderbyte"));
