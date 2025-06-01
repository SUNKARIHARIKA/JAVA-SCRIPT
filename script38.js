let n=prompt("enter the number");
let i=1;
let sum=0;
//let m=n;
while(i<n){
    if(n%i==0){
        sum=sum+i;
    }
    i++;
}
if(sum==n){
    console.log(n,"is the perfect number");
}
else{
    console.log(n,"is not the perfect number");
}