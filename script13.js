let num1=prompt("enter the starting number");
let num2=prompt("enter the last number");
let temp;
let i=0;
if(num1>num2){
    temp=num1;
    num1=num2;
    num2=temp;
}
for(i=num1;i<=num2;i++){
    if(i%2==0){
        console.log(i);
    }
}