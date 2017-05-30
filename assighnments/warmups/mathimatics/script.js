var basicOb = function (oberator, num1, num2) {
        if (oberator === "*") {
            return num1 * num2
        } else if (oberator === "-") {
            return num1 - num2
        } else if (oberator === "+") {
            return num1 + num2
        } else if (oberator === "/") {
            return num1 / num2
        }
}
        console.log(basicOb("+", 5, 10))