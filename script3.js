// primitive data types
let age=30;
console.log(typeof age);
let price=10.5;
console.log(typeof price);
let name="harika";
console.log(typeof name);
isfollow=true;
console.log(typeof isfollow);
let x=null;
console.log(typeof x);
let z=BigInt("123");
console.log(typeof z);
// let y=symbol("harika");
// console.log(typeof y);
// non premitive data type
const student={
    name:"harika",
    age:19,
    cgpa:9.5,
    ispass:true
};
console.log(student);
console.log(student["name"]);
console.log(student["age"]);
console.log(student.cgpa);
const product={
    name:"Ballpen",
    color:"black",
    cost:259,
    offer:5,
    rating:4
}
console.log(product);
console.log(product["name"]);
console.log(product.color);
