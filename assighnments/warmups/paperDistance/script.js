var foldPaper = function (dist) {
    /*
    var non - positive = -1*/
    if (dist <= 0) {
            console.log(null)
        }
    var fold = 0
    var thickness = 0.0001
    for (var i = 0; thickness < dist; i++) {
        thickness *= 2
        fold += 1
        
    }
    console.log(thickness);
    console.log(fold);

}
foldPaper(-0.0016);
