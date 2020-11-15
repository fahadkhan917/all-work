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