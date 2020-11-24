// varaible Es6
// var name="asad";
// function foo(){

//  name="fahad"

// }

// foo()

// console.log(name)



//let varaible
// if(true){

// let names="fahad"

// }

// console.log(names)

// let finame="fahad";
// finame="khan";
// console.log(finame)



// const school="abc school";
// var obj={

// schoolname:school

// }

// for(var key in obj){

// document.write(obj[key])

// }

//template literals

// let fi="fahad";
// let laname="khan";
// document.write(`my name is ${fi} ${laname}`)



//spread operators

// var student=["fahad","khan"];
// var student2=[...student,"asad","umer"];
// document.write(student2)


// var obj={

// name:"fahad",
// roll:123

// }

// var obj1={
// ...obj,
// school:"ali",


// }

// // console.log(obj1)
// for(var key in obj1){

// document.write(obj1[key])

// }


//  object desturing


// var obj={

// name:"fahad",
// id:123,
// school:"abcd school"


// }

// let{name,id,school}=obj;
// document.write(name);
// console.log(id); 


// var age=20;
// if(age>30){

// console.log("30sa bara hai")

// }

// else{

// console.log("30 sy chota hai")

// }

// var age=20;
// var check=
// age>30?
// "30 sa bara hai"
// :
// "30  sa chota hai"
// console.log(check)

// console.log("fahad")
// console.log("fahadkhan")
// console.log("fahadumer")


// async or sync
 
// setTimeout(() => {
//    console.log("fahad") 
// }, 1000);

// console.log("fahadkhan")
// console.log("asad")

// var name1;
// setTimeout(() => {
//     name1="fahad"
// }, 2000);
// setInterval(() => {
//     console.log(name1)    
// }, 1000);


//promise

// var promise=new Promise(function(resolve,reject){

// var zinger="avalible";
// if(zinger==="avalible"){

// resolve("han done")

// }
// else{

// reject("nhi")

// }



// })

// promise.then(function(data){

// console.log("reslove",data)

// })

// .catch(function(error){
// console.log("sorry")

// })



// var promise=new Promise(function(resolve,reject){

//     var zinger="hai";
//     if(zinger==="hai"){

// resolve("han done")

//     }

//     else{

// reject("sorry")

//     }


// })

// promise.then(function(data){

// document.write(data)

// })

// .catch(function(){

// document.write("sorry")

// })


// var promise=new Promise(function(resolve,reject){

// var a="han";
// if(a="han"){
// resolve("han hai")


// }

// else{

// reject("nhi hai")

// }
// })


// promise.then(function(data){

// document.write("yes")

// })

// .catch(function(error){

// document.write("no")

// }) 


// var promise=new Promise(function(resolve,reject){

// if(true){
// setTimeout(() => {
//     resolve("yes")
// }, 3000);


// }
// else{
// reject("sorry")

// }

// })


// promise.then(function(data){

// console.log("yahoo")

// })

// .catch(function(error){

// console.log("error")

// })



// var obj1={
// name:"fahad",
// id:123


// }

// var {name,id}=obj1

// console.log(name)

// var arr=["fahad","umer","asad"];
// var [name1,name2,name3]=arr;
// document.write(name1)


//function expression

// let foo=function(){

// console.log("hellow world")

// }

// foo()

//arrow function

// =>

// let hellow=()=>{

// console.log("fahad")

// }
// hellow();

// let foo=(name)=>{

// document.write(name);

// }
// foo("fahad");

// let foo=()=>{
// return "ali";

// }
// document.write(foo())


// function foo(name){

// console.log(this)

// }
// foo("fahad")

// var a=(name1)=>{

// console.log(this)

// }

// a("ali")

// setInterval(() => {
//     console.log("fahad ")
// }, 2000);

// let getdata=(rendata)=>{

// var a="fahad"
// rendata()
// }



// let rendata=()=>{

// b="ali"

// document.write(a)
// }
// getdata(rendata)



// let get_data=(render_data)=>{

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
// render_data(data)
//     })


// }



// let render_data=(data)=>{
// console.log(data);


// }
// get_data(render_data)


// let get_data=(setdata)=>{
// setTimeout(() => {
//     setdata("fahad")
// }, 3000);

// }

// let setdata=(name)=>{
// console.log(name)


// }

// get_data(setdata)


// function abc(xyz){
// xyz("fahad_ali")


// }

// function xyz(name){
// console.log(name)


// }
// abc(xyz)

// function abc(xyz){
// xyz("asad")


// }

// function xyz(name){
// console.log(name)


// }
// abc(xyz)

// let a=(b)=>{
// b("umer")


// }


// let b=(name)=>{
//     document.write(name)


// }
// a(b);



// let arr=[{name:"fahad",age:45},{name:"asad",age:77}];

// let fil=arr.filter((a)=>{
// return a.age==77;


// })
// console.log(fil)


// let arr=[{name:"fahad",age:45},{name:"asad",age:77}];

// var fil=arr.filter((a)=>{
// return true;

// })
// console.log(fil)


// let name="fahad";
// let se="a";

// if(name.startsWith(se)){

// console.log(name);

// }

// let arr=[2,4,5];
// arr.map(a=>{document.write(a);});


// var arr=[2,5,3,7];
// var ab=arr.map((a)=>a*2)
// console.log(ab)


// async function abc(){

// let data=await fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(data)
// }

// abc();


// var promise=new Promise(function(resolve,reject){

//     var a="yes";
//     if(a==="yes"){
//     resolve("okay")


//     }
// else{

//     reject("sorry")

// }



// })
// promise.then(function(data){

// console.log("hai bhai")

// })

// .catch(function(error){
// console.log("no")

// })


// function abc(xyz){

// xyz("ali")


// }

// function xyz(data){
// console.log(data)


// }

// abc(xyz);




//es6 class

// function Student(name,email){
// this.name=name;
// this.email=email;



// }

// var student1=new Student("fahad","fk16181@gmail.com");
// for(var key in student1){

// document.write(student1[key])

// }

// class

// class Student{
// constructor(name,email){

// this.name=name;
// this.email=email;

// }


// }

// class Xyz extends Student{
// constructor(name,email,school){
// super(name,email)

// this.school=school;
// }


// }

// var studen1=new Xyz("fahad","gmail","salyani");
// console.log(studen1)










// class Student{
// constructor(name,email){

// this.name=name;
// this.email=email;

// }




// }

// class Student1 extends Student{
// constructor(name,email,school){
// super(name,email)
// this.school=school;

// }


// }


// var student2=new Student1("fahad","ali","slyani");
// console.log(student2);





// var pro=new Promise(function(resolve,reject){
//    var name="fahad"
//     if(name==="fahad"){
//    resolve("yes")


//     }
// else{

// reject("sorry")

// }

// })

// pro.then(function(data){

// document.write(data)


// })

// .catch(function(erorr){


// document.write(error);

// })

// class Student{
// constructor(name,email){
// this.name=name;
// this.email=email;


// }


// }

// class Student1 extends Student{
// constructor(name,email,school){
// super(name,email)
// this.school=school;

// }



// }


// var stu=new Student1("fahad","ali","hamadrad");
// console.log(stu);


var first="fahad";
var last="khan";
document.write(`my name is ${first} ${last}`)