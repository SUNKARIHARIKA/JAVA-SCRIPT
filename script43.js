let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked");
})
btn1.addEventListener("click",()=>{
    console.log("button2 was clicked");
})
btn1.addEventListener("click",()=>{
    console.log("button3 was clicked");
})
btn1.removeEventListener("click",()=>{
    console.log("button2 was clicked");
})