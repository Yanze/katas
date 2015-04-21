function MultiplicativePersistence(num) {
    var numbers = num.toString();
    var counter = 0;
    while(numbers.length > 1){
        var sum = 1;
        numbers.split("").map(function(a){
            sum *= parseInt(a);
        });
        numbers = sum.toString();
        counter++;
    }
    return counter;
}
console.log(MultiplicativePersistence(39));
console.log(MultiplicativePersistence(4));
console.log(MultiplicativePersistence(19));
console.log(MultiplicativePersistence(2718));
