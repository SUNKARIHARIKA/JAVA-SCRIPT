let str="harika";
console.log(str);
console.log(str.length);
console.log(str[0]);
console.log(str[2]);
let str2="meghana";
console.log(str2.length);
//templete literals in js
let sentence=`this is a special statement`;
console.log(sentence);
let info={
    name:"harika",
    age:19
};
console.log(`my name is ${info.name} and my age is ${info.age} this is my information`)
console.log(`the addition of two nummbers 2 and 3 is ${2+3}`);
//templete literals consist of escape characters /n and /t
console.log("harika\nmeghana");
console.log("harika\tmeghana");
let str3="harika\nmeghana";
console.log(str3.length);//14
//uppercase
console.log(str2.toUpperCase());
//lowercase
console.log(str2.toLowerCase());
//remove space at starting and ending
let str4="   apna college  ";
console.log(str4.trim());
//slice operations on string
let str5="0123456789";
console.log(str5.slice(0,5));  //01234
console.log(str5.slice(4,7)); //456
//concatination of strings
console.log(str.concat(str2));
console.log(str+str2);
//replace 
let str6="hello";
console.log(str6.replace("h","y"));
console.log(str6.replace("hello","harika"));
//substring
let str7="iam learning javascript programming language";
let substr=str7.substring(0,5);
console.log(substr);
//string search
let str8="harikameghana";
console.log(str8.indexOf("meghana"));
//string comparision
let str9="daddy";
let str10="daddy";
console.log(str9.localeCompare(str10));
//charat
let str11="premalatha";
console.log(str11.charAt(5));
console.log(str11.charAt(3));
//reverse of a string
let str12="rajireddy";
console.log(str12.slice(0,-1));
