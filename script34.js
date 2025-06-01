//accessing the attribute value of div tag
let div=document.querySelector("div");
console.dir(div);
console.dir(div.getAttribute("id"));
console.dir(div.getAttribute("name"));
//accessing the attribute value of p tag
let p=document.querySelector("p");
console.dir(p);
console.dir(p.getAttribute("class"));
console.dir(p.getAttribute("name"));
//to set attribute value
//console.dir(div.setAttribute("id","newid"));
console.dir(div.setAttribute("style","background-color:pink"));
console.dir(p.setAttribute("class","myclass"));
//to add or change the style of webpage
console.dir(div.style);
div.style.backgroundColor='red';
div.style.fontSize='25px';
//div.style.visibility='hidden';
//text content
//console.dir(div.textContent);
//insert elements
let el=document.createElement("button");
el.innerText="click me!"
console.dir(el);
div.append(el);
div.before(el);
div.prepend(el);
div.append(el);
let newheading=document.createElement("h1");
newheading.innerText="this is a heading tag"
console.log(newheading);
let boddy1=document.querySelector("body");
boddy1.prepend(newheading);
//delete element
newheading.remove();

