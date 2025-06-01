// if-statemnt
let age=18;
if(age>=18){
    console.log("eligible to vote");
}
if(age<18){
    console.log("not eleigible to vote");
}
// if-else statement
let mode="light";
let color;
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);
// else-if statement
// student grades
let grade;
let score=prompt("enter the score of the student");
if(score>=80 && score<=100){
    grade="a";
}
else if(score>=70 && score<=89){
    grade="b";
}
else if(score>=60 && score<=69){
    grade="c";
}
else if(score>=50 && score<=59){
    grade="d";
}
else{
    grade="f";
}
console.log(grade);
