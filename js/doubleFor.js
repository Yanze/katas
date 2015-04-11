var p1={
    name:"lily",
    age:20,
    list:[1,2,3]
}
var p2={
    name:"ssd",
    age:25,
    list:[2,5,6]
}

var p3={
    name:"llo",
    age:24,
    list:[5,6,7]
}

ps=[p1,p2,p3]
var sum=0;
for(i =0; i<ps.length; i++){
    var currentList = ps[i].list;
    for(k=0;k<currentList.length; k++){
        sum += currentList[k];
    }
}
console.log(sum);
