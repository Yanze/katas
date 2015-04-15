// The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

function simpleSymbols(str) {
  if (str.length > 0 && str.match(/[a-z]/i)) {
    for (i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i) && (str[i - 1] !== "+" || str[i + 1] !== "+")) {
        return false;
      }
    }
  }
  return true;
}


// second way
function simpleSymbols(str) {
  if (!str) {return false;}
  for (i = 0; i < str.length; i++) {
    if (isLetter(str[i]) && (str[i - 1] !== "+"  || str[i + 1] !== "+")) {
      return false;
    }
  }
  return true;
}
function isLetter(str) {
  return str.length > 0 && str.match(/[a-z]/i);
}


console.log(simpleSymbols("+d+=3=+s+"));
console.log(simpleSymbols("+d+"));
console.log(simpleSymbols("+d+=3+a+b+"));
console.log(simpleSymbols("+d+=3=+s"));

