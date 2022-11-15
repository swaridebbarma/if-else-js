let age=require("readline-sync").questionInt("enter your age:")
if (age>=18){
    console.log(age," year is allowed for voting")
}
else{
    console.log(age,"year is not allowed for voting")
}