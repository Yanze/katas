function CountingMinutesI(str){
    var separate_two_times = str.split("-");
    var totalMinutes=0;
    if(totalMin(separate_two_times[1]) < totalMin(separate_two_times[0])){
        totalMinutes = 1440 - (totalMin(separate_two_times[0]) - totalMin(separate_two_times[1]));
    }
    else{
        totalMinutes = totalMin(separate_two_times[1]) - totalMin(separate_two_times[0]);

    }
    return totalMinutes;
}

function totalMin(time){ // "7:30am"
    var am_pm = time.slice(-2); // 'am'
    var hour_min = time.match(/\d+/g); //["7","30"]
    var hour = Number(hour_min[0]);
    if(am_pm == "pm"){
        hour = Number(hour_min[0]) + 12;
    }
    return hour*60 + Number(hour_min[1]);

}
console.log(CountingMinutesI("7:00am-9:00am"));
console.log(CountingMinutesI("1:00am-1:10pm"));
console.log(CountingMinutesI("1:23am-1:23am"));
console.log(CountingMinutesI("1:10am-1:20am"));
console.log(CountingMinutesI("1:23am-1:50am"));
console.log(CountingMinutesI("7:00am-7:30am"));
