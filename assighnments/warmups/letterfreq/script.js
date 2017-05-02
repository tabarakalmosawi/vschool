var letterFreq = function (str) {
    str = str.toLowerCase()
    var freq = {}
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i)
        if (freq[character] === undefined){
            freq[character] = 1
        } else {
            freq[character] += 1
        }

    }
    console.log(freq)
}

letterFreq("Hello World");
