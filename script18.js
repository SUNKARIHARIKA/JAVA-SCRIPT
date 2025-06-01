arr=[10,20,30,40];
//push-insert the element at last of an array
arr.push(50);
console.log(arr);
//pop-delete the last element of an array
arr.pop();
console.log(arr);
let fooditems=["potato","banana","apple","cherry"];
console.log(fooditems.toString());
//conact
let dcheros=["thor","spiderman","batman"];
let marvelheros=["superman","batman"];
let h=dcheros.concat(marvelheros);
console.log(h);
//to insert at start of the array
marvelheros.unshift("harika");
console.log(marvelheros);
//delete from the start
marvelheros.shift();
console.log(marvelheros);
//slice
console.log(marvelheros.slice(0,2));
//spice
let arr1=[1,2,3,4,5,6];
arr1.splice(2,2,100,101); 
console.log(arr1);
let arr2=[1,2,3,4,5];
arr2.splice(2,0,101);
console.log(arr2);
let arr3=[1,2,3,4,5];
arr3.splice(2,2,103,104);
console.log(srr3);