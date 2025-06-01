let num=prompt("enter a number");
let n=num.toString();
let l=n.length;
let sum=0;
let m;
m=n;
while(n>0){
    let x=n%10;
    sum=sum+x**l;
    n=n/10;
}
if(sum==m){
    console.log("the number is armstrong");
}
else{
    console.log("the number is not a armstrong");
}