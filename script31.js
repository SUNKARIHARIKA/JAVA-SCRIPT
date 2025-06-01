//window object
window.console.log("harika");
window.alert("hey! how are u");
window.num=prompt("enter a number");
//document object
console.log(window.document);
console.dir(window.document);
//accessing all documnet properies
console.dir(document);
//accessing body tag
console.dir(document.body);
//accessing head tag
console.dir(document.head);
//accessing the tag that was present in first of body tag
console.dir(document.body.childNodes[1]);
console.dir(document.body.childNodes[2]);
document.body.style.background='green';
//accessing the id elemnts
let ele1=document.getElementById("d3");
console.dir(ele1);
let ele2=document.getElementById("d1");
console.dir(ele2);
//accessing class elements
let ele3=document.getElementsByClassName("p1");
console.dir(ele3);
//accessing  elements using tag
let ele4=document.getElementsByTagName("div");
console.dir(ele4);
//accessing elements using query selector
let ele5=document.querySelector("p");//first element of p tag
console.dir(ele5);
let ele6=document.querySelectorAll("p");
console.dir(ele6);
let ele7=document.querySelector("#d1");
console.dir(ele7);
let h2=document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText+"apna college students");

