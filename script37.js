let n=prompt("enter a number");
i=1;
console.log(`the factors of ${n} is`);
while(i<=n){
    if(n%i==0){
       console.log(i);
    }
    i++;
}