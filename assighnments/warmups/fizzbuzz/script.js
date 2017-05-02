/*
doing a FIZZ BUZZ
using for loop and and the numbers from 1 to 100
and using if  , we will have 4 if : 
first :i % 3 ===0
second :i % 5 ===0
third : the both 
fourth: write [i] "the number"
sudo code :
for (var i = 0 ; i <= 100 ; i++)
if ( i % 3 === 0 && i % 5 === 0 )
console.log("FIZZBUZZ")

*/

for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ")
    } else if (i % 3 === 0) {
        console.log("FIZZ")
    } else if (i % 5 === 0) {
        console.log("BUZZ")
    } else {
        console.log(i)
    }
}
