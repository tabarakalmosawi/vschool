//pass by value 
// (1)
var a = 5
var b = a
a = 10
console.log(b)
// (2)
var names = "Tabarak"
name = names
var names = "Saja"
console.log(name)

//pass by refrense 
// (1)
var tabarak = {
    name: "Tabarak",
    age: 20,
    country: "Iraq"
}
var saja = tabarak
tabarak.name = "Saja";
console.log(saja)

//(2)
var arr =  [ "saja " , 'Ali ' , "Toqa "]
arr.

