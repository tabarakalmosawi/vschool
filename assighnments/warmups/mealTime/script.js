var mealTime = function(time){
    if (time>=0 && time<=10){
        console.log("BREAKFAST TIME")
    } else if (time>10 && time<=16){
        console.log("LUNCH TIME")
    } else if (time>16 && time<=24){
        console.log("DINNER TIME")
    }
}
mealTime(16)