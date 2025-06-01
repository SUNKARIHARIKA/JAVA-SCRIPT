arr=[2,6,34,98,45,67,32,44,12];
let evenarr=arr.filter((val)=>{
    return val%2==0;
});
console.log("even set array is:");
console.log(evenarr);
let oddarr=arr.filter((val)=>{
    return val%2!=0;
});
console.log("odd set array");
console.log(oddarr);
