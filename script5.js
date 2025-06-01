// airthmetic operators-(+,-,*,/,**,%,++,--)
let a=5;
let b=2;
console.log("a=",a,"b=",b); 
console.log(a+b); //7
console.log(a-b); //3
console.log(a*b); //10
console.log(a/b); //2.5
console.log(a**b); //25
console.log(a%b);//1
//unary operators
let c=4;
let d=5;
console.log(--c); // 4-1=3
console.log(++c); //3+1=4
console.log(c++);
//assignment operators
let e=2;
let f=3;
e=e+5;
console.log(e);
f=f-2;
console.log(f);
e=e*5
console.log(e);
//comparision operators(==,!=,===,!==)
j=5;
k=2;
console.log(j==k);
x="5";
y=5;
console.log(x==y);
 console.log(x===y);
 console.log(x!==y);
 //logical operators
 console.log(j>k && j==k);
 console.log(j>k || j==k);
 console.log(j>k && j!=k);
 console.log(!(j==5));
//  ternary operator
age=25;
let result=age>18 ? "eligible to vote": "not eligible to vote";
console.log(result);
