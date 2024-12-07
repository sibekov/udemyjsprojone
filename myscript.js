var spyname=false
var spylastname=false
var age=false
var height=false
var pet="tiger"

while(spyname=false){
spyname=prompt("enter your first name: ")
spylastname=prompt("enter your last name: ")
age=prompt("enter your age: ")
height=prompt("enter your height: ")
pet=prompt("enter your pet's name: ")
if(spyname[0]==spylastname[0] && (age<30 && age >20) && height<175 && pet[-1]=="y"){
    {console.log("Welcome to the game spy!!!!")}
    break
}
else{console.log("you are taking chances...")}
}