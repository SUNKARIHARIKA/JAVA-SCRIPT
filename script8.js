//for loop
// for(let i=1;i<=5;i++){
//     console.log("harika");
// }
// for(i=1;i<=10;i++){
//     console.log(i);
// }
// sum of first n natural numbers
// let n=prompt("enter a number");
// sum=0;
// for(i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);
//while loop
// x=1
// while(x<=10){
//     console.log(x);
//     x++;
//}
//do-while loop
// let i=5;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)
//for-of loop
//  let str="harika";
//  for( let i of str){
//     console.log(i);
//  }
//for-in loop
const student={
    name:"harika",
    age:18,
    cgpa:9.5,
    ispass:true
};
for(let i in student){
    console.log(i);
}
for (let key in student){
    console.log(key);
}
for (let key in student){
    console.log("keys =",key,"values =",student[key]);
}