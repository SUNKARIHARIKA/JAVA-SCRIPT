let btn=document.querySelector("#btn");
btn.onclick=()=>{
    console.log("button is clicked");
    let a=25;
    a++;
    console.log(a);
}
let btn1=document.querySelector("#btn1");
btn1.ondblclick=()=>{
    console.log("button is double clicked");
}
let div=document.querySelector("div");
div.style.height="100px";
div.style.width="100px";
div.style.backgroundColor="green";
div.onmouseover=()=>{
    div.style.backgroundColor="red";
    console.log("entered inside the box");
}
