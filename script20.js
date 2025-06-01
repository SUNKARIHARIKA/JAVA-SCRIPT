//using functions
function countvowel(str){
    count=0;
    for(let val of str){
        if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u"){
            count++;
        }
    }
    return count;
}
let res=countvowel("harika");
console.log(res);
//using arraow functions
const vowel=(str)=>{
    count=0;
    for(let val of str){
        if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u"){
            count++;
        }
    }
    console.log(count);
}
vowel("harika");