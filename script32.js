//displaying the content present in div and div child tags
let div=document.querySelector("div");
console.dir(div);
console.dir(div.innerText);
console.dir(div.innerHTML);
//changing the text of div to abcd
div.innerText='abcd';
console.dir(div);
//creating another div inside a div
div.innerHTML="<div>innerdiv</div>";

