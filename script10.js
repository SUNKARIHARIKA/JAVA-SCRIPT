let n=prompt("enter a number");
let f1=0;
let f2=1;
console.log(f1);
console.log(f2);
let i=0;
while(i<=n){
    let t=f1+f2;
    f1=f2;
    f2=t;
    console.log(t);
    i++;
}