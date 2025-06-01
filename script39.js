let n=prompt("enter the number");
let rev=0;
let x;
while(n>0){
    x=(n%10);
    rev=rev*10+x;
    n=(n/10);
}
if(n==rev){
    console.log(n,"is a pallindrome number");
}
else{
    console.log(n,"is not a pallindrome number");
}