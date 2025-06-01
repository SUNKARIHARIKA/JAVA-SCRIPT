let n=prompt("enter a number");
let sum=0;
let x;
while(n>0){
    x=n%10;
    sum=sum+x;
    n=n/10;
}
console.log(sum);