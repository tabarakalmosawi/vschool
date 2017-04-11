var Person = function(name , age ,favoriteColor , isSingle){
    this.name = name ; 
    this.age = age;
    this.favoriteColor = favoriteColor ; 
    this.isSingle = isSingle;
    this.can = function(){
        console.log(this.name + " can do this" + " in the age " + this.age + " and " + this.name + " favorite color is " + this.favoriteColor);
    
    }
}
var tabarak = new Person ("Tabarak" , 19 , "black" , true);
console.log(tabarak);
tabarak.can()