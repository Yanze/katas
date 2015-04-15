function ABCheck(str){
    for(i = 0; i < str.length;i++){
        if(str[i] === "b" && (str[i-4] ==="a" || str[i + 4] ==="a")){
            return true;
        }
    }
    return false;
}
console.log(ABCheck("after badly")); // false
console.log(ABCheck("after it")); // false
console.log(ABCheck("aaaaddddd")); // false
console.log(ABCheck("Laura sobs")); // true
console.log(ABCheck("abccccazzzb")); //true
console.log(ABCheck("bzzza")); // true
g
