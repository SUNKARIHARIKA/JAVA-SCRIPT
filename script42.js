let btn1=document.querySelector("#btn1");
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
}
let btn2=document.querySelector("#btn2");
btn2.ondblclick=(db)=>{
    console.log(db);
    console.log(db.type);
    console.log(db.clientX,db.clientY);
}