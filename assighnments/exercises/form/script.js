
var formobj= document.querySelector("form")
var diet=[]
document.getElementById("submit").addEventListener("click" , function (){
    for(var i=0 ; i<formobj.diet.length ; i++){
        if(formobj.diet[i].checked ===true){
            diet.push(formobj.diet[i].value)
        }
    }
    alert(" first name: " + formobj.firstname.value + " \n last name: " + formobj.lastname.value + "\n age:" + formobj.age.value + " \n gender:" + formobj.gender.value + "\n diet:"  + diet )
    
})

