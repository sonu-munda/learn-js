//1 ways to print
//console.log("hello world");
//alert("me");
//document.write("this is my book");

//2 javascript console Application Programing Interface(API)
console.log("hello world", 4 + 6, "another world");
console.warn("warning");
console.error("this is error");

// 3 javascript variables

var num1 = 34;
var num2 = 78;
console.log(num1 + num2);


var str1 = "this is a string";
var str2 = 'this is also a string';

var marks = {
    sonu: 67,
    sumit: 89,
    rakesh: 56,
    total: {
        math: 100,
        sci: 200
    }
}
let theme = {
    lightColorTheme: "#ff0000", // Red
    nightColorTheme: "#000000" // Black
}
console.log(marks.sumit + marks.total.sci);

// 4 data types in javascript
// numbers
var num1 = 455;
var num2 = 56.67;

// string
var str1 = "this is a string";
var str2 = 'this is also a string';

/* object 
var marks={
    sonu :67,
    sumit :89,
    rakesh :56
 total:{ 
        math:100,
        sci:200
    }

console.log(marks.sumit+marks.total.sci);*/

// Booleans (true or false)
var a = true;
var b = false;
console.log(a, b);

// two types of data types in js
// 1 primitive data types: undifined , null, number, string, symbols
// 2 refrences data types: arrays and objects

var arr = [1, 2, 3, "sonu"]
console.log(arr);
console.log(0);

// Operators in js
// Arithmetic operators

var a = 100;
var b = 10;
console.log("the value of a+b", a + b);
console.log("the value of a-b", a - b);
console.log("the value of a*b", a * b);
console.log("the value of a/b", a / b);

// Assignment Operators

var c = b;
//c+=2;// c=c+2
//c-=6;
//c*=2;
c /= 2;
//console.log(c);

// comparison operators
var x = 56;
var y = 34;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// logical operators
// [( and operators) && operators me jab tak same ni hoga tab tak true ni hopga)
/*console.log( true && true);
console.log( true && false);
console.log(false && false);
console.log( false && true);

// or  operators (||)
// isme dono me se koi ek true chaiye tab wo true hpga
console.log( true || true);
console.log( true || false);
console.log(false || false);
console.log( false || true);*/

// logical not (!)
// jo sach ko jhut or jo jhut ko sach kar de 
console.log(!false);
console.log(!true);

// functions in javascript
// DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// condotions in js
// if - else statement

var age = 17;
if (age > 54) {
    console.log(true);
}
else {
    console.log(false);
}

// if- else statement

/*var age = 5;
if(age>32){
    console.log("you are not a kid");
}
else if(age>26){
    console.log("bacche nahi rahe");
}

else if(age>26){
    console.log("bacche nahi rahe");
}

else if(age>26){
    console.log("bacche nahi rahe");
}
else{
    console.log(" bacche ho");
}
console.log("end of ladderr");*/


//var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);

//var i = 6;
/*for (i = 6; i < arr.length; i++) {
    console.log(arr[i]);
}

 arr.forEach(function(element)){
  console.log(element);
}

// while loop

let j = 3;
while (j < arr.lenth) {
    console.log(arr[j]);
    j++;
}

// do while loop

do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);*/

// break ( jaha tak v == krege bs wahi tk krega fr loop k bahar aa jaega)

// continue ( jisko v == krege usko chor k pura loop krega)

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arr[i])
}

// array method

let myarr = ("fan", "camera", 34, null, true);
console.log(myarr.length);
//myarr.pop(); (last se ek hata dega )
//myarr.push("harry"); ( last me ek add kr dega )
//myarr.shift(); ( first element hat adega)
//myarr.unshift(); ( jo pehle tha uska le aega fir se)

// let newlen=myarr.unshift("harry"); (newlen ek naya lenght dega agr unshift run jar rhe to)
//console.log(newlen);
 
//let toString= myarr; ( ye nai samaj aya)
//console.log(myarr.toString);
//console.log(myarr.lenght);

// d.sort
/*let d=[1,2,0,123,231,213];
console.log(d.sort);
console.log(d);*/

//string Methods in js

let mylovelystring="harry is good boy and good child";
 console.log(mylovelystring.length);
 //console.log(mylovelystring.indexOf("good"));
 //console.log(mylovelystring.lastIndexOf("good"));

 // replace method ( replace method sirf first wala ko replace krta h)

 /*console.log(mylovelystring.slice(1,7));
d= mylovelystring.replace("harry", "rohan");
d=d.replace("good", "bad");
console.log(d,mylovelystring);*/

let mydate= new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDate());
console.log(mydate.getMinutes());
console.log(mydate.getHours());





