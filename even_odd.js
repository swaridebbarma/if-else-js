var num=require("readline-sync").questionInt("enter number:");

if ( num%2==0){
    console.log("even number",num);
}
else{
    console.log("odd number",num);
}