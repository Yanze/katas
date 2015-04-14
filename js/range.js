function range(start, end, step) {
    if (!step) step = 1;
    if (start < end) {
        var numbers = [];
        for (i = start; i <= end; i+=step) {
            numbers.push(i);
        }
        return numbers;
    } else if (start > end) {
        var numbers = [];
        for (i = start; i >= end; i-=step) {
            numbers.push(i);
        }
        return numbers;
    }
}
console.log(range(1,5));
console.log(range(5,1));
console.log(range(1,10,2));
console.log(range(10,1,2));
