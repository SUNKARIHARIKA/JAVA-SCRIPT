//arrays-collection of items
let marks=[98,34,88,78,55,45];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));
heros=["ironman","thor","bulk","shakthiman"]
console.log(heros);
console.log(marks[0]);
console.log(marks[2]);
marks[2]=90;
console.log(marks);
for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}
for(let el of marks){
    console.log(el);
}
for(let h of heros){
    console.log(h);
}