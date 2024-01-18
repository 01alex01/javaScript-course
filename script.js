/*
let js = "amazing"; //semicolon

console.log(40 + 8 - 10);
console.log("jonas");
console.log(23);

let firstName = "maltilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name convention
let jonas_matilda = "jm";
let $finction = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJob = "teacher";
console.log(myFirstJob);


//the 7 primitive DATA TYPE
// so there are diffrent type of primitive number,string,bullion,undefined,null,symbol and big int.
// Number are always so called used for decimal and integers
// string is a sequence of characters Used for text
// Boolean logical type that can only be true or false used for taking decisions
//undefined:value taken by a variable that is not yet defined ('empy value')
//null also means 'empty value'
//symbol (ES2015):value that is unique and cannot be change [not useful for now]
//Biglnt (ES2020): Larger integers than the number type can hold
// multi line comment in js is /*

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 22);
// console.log(typeof "dog");

//dynamic typing simply means that we can easily change type of a value that is hold by a variable

javaScriptIsFun = "hello!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
cconsole.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);

//let can make you mutate
let age = 30;
age = 31;

//const are immuatable
const birthYear = 1991;
// birthYear = 1990;
//  const job;

//var is the old way of declaring variable and it's works pretty much as let
var job = "programmer";
job = "teacher";
console.log(job);

//math operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

//assingment operator
let x = 10 + 5; //15
//reassingning the x value
x += 10; //x = x + 10 = 25
x *= 4; //x=x * 4 = 100
x++;
x--;
x--;
console.log(x);
//comparison operator
console.log(ageJonas > ageSarah); //>,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x= y = 10, x = 10;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "i'm " + firstName + ", a " + (year - birthYear) + "year old " + job + " !";

console.log(jonas);
// A template literals, we can write a string in a more normal way, and then basically insert the variables directly into the string and they will simply be replaced so basically a template literals can assemble multiple pieces into final string.

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);
console.log(`just a regular string... `);
//multi line strings
console.log(
  "string with \n \
multiple \n\
lines\n\
"
);

console.log(`string
multiple
lines`);
//backticks ``
