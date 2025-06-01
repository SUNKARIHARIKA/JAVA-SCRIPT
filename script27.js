let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);
let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sum);
let mul=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(mul);