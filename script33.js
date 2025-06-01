let access=document.querySelectorAll(".box");
console.dir(access);
console.dir(access[0]);
console.dir(access[1]);
// console.dir(access[0].innerText="new unique value 1");
// console.dir(access[1].innerText="new unique element 2");
// console.dir(access[2].innerText="new unique elemnt 3");
let idx=1;
for(div of access){
    div.innerText=`new unique value is ${idx}`;
    idx++;
}
