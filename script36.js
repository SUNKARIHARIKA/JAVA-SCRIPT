let n=prompt("enter the number");
let i=1;
let count=0;
while(i<=n){
    if(n%i==0){
        count++;
    }
    i++;
}
if(count==2){
    console.log(`${n} is a prime number`);
}
else{
    console.log(`${n} is not a prime number`);
}