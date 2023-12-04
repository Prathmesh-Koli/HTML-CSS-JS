//  DEFINATION JAVASCRIPT=
//JavaScript is a simple scripting launguage to perform complex operations on webpage

var a="Prathmesh"

let b="hello"
b = 3456;
let c="hi"
let d=45;  //There are two types of variables let and var
let e=true;
let f =23.8364;//it has only number... that is no double, no float,no short,no byte but has bigint

console.log(a)
console.log(b)
console.log(c)
console.log(typeof c)// To check data type and Identifier
console.log(typeof b)
console.log(typeof e)

let g=45;
let h="45  ";
console.log(g==h)//To check only value --while checking it it remove all spaces all external factors only check value
console.log(d===e)// Cmparator operator that compare data type of two variables, to stricly check the values to with respect to  datatype

function validate(name){//this is the way you have to create function

    if(name == 'JBK'){    // this is the way you add add validation
     console.log("Welcome to JBK")
    } else{
        console.log("Not Eligible")
    }

}
validate('JBK')// this is the way you call the function


var x="javascript"

function pointgvar(){
   
    let x= "typescript"
    console.log(x);
    console.log(window.x);
    
}
pointgvar();