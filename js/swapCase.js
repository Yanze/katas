function SwapCase(str) {
    var cseChanged = "";
    for(var i = 0; i < str.length; i++){
        var currentWord = toggleCase(str[i]);
        cseChanged += currentWord;
    }
    return  cseChanged;
}

function toggleCase(word){
    var wordChanged = "";
    for(var i =0; i < word.length; i++){
        var currentChar = word[i];
        if(currentChar === currentChar.toUpperCase()){
            wordChanged += currentChar.toLowerCase();
        }
        else{
            wordChanged += currentChar.toUpperCase();
        }
    }
    return wordChanged;
}
console.log(SwapCase("Hello World"));
console.log(SwapCase("Hello-World, lol"));
console.log(SwapCase("Hello-World, lOl"));
