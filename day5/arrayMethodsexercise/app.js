var fruit = ["banana", "apple", "orange", "watermelon"]; 

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.splice(0,1);
var orangenum = fruit.indexOf("orange");
fruit.push(orangenum)
fruit.push()
console.log(vegetables.length);
vegetables.push(vegetables.length);
var food = fruit.concat(vegetables);
food.splice(4,2);
food.reverse();
console.log(food.toString());
console.log(food);


console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  
