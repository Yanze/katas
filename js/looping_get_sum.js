// looping from 10 to 1
for(i = 10; i > 0; i--){
    //console.log(i);
}



// looping from 1 to 10, return sum of the numbers
var num=0;
for(i = 1; i <= 3; i++){
   num += i;
}
//console.log(num);



//looping an array of intergers, return sum
var sum =0;
var myArray = [1,2,3,4,5,6,7,8,9,10];
for(i = 0; i < myArray.length; i++){
    sum += myArray[i];
}
//console.log(sum);



//GetArraySum2
function getArraySum2(arr){
    var sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}



//function GetArraySum
function getArraySum(arr){
    var total = arr.reduce(function(a,b){return a+b});
    return total;
}

var res = [1,2,3,4,5,6];
console.log(getArraySum(res));
