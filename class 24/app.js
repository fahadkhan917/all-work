// let obj={
// name:"fahad",
// cls:123

// }

// let{name,cls}=obj;
// document.write(name);

// let name=["fahad","ali","khan"];
// let[name1,name2,name3]=name;
// document.write(name3);


//function expression

//  let foo=function(num,num1){

// document.write("hellow");

//  }

//  foo(); 

// arrow function

// let hello=(name,name1)=>{

// document.write(`${name} ${name1}`);
// }
 
// hello("fahad","khan");

// let a=()=>{

// return "fahad";

// }

// a();

// let a=()=> "fahad";
    
    
    
//     a();

 
// let a=(name)=>{

//     console.log(this)

// }
// a();



// setInterval(() => {
//     document.write("fahad");
// }, 1000);


// let getdata=()=>{



// }

//hight order function
// let arr=[{name:"fahad",age:12},{name:"ali",age:54}]

// let filter=arr.filter(function(a){

// return a.age===12;

// })

// console.log(filter);

// let arr=[{name:"fahad",age:12},{name:"ali",age:54}]

// let filter=arr.filter(function(a){

// return a.age===12;

// })

// console.log(filter);


//search

// let name="fahad";
// let sec="a";
// if(name.startsWith(sec)){

// document.write(name);

// }

//array map

// let arr=[2,3,4,5];
// let mul=arr.map(a=>a*2);
// document.write(mul);

//class
// class abc{


// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err=>console.log(err));



// async function get_data(){

// let data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(data);

// }

// get_data();

//classes


// function Student(name,name1){
// this.name=name;
// this.name1=name1;

// }

// let stu=new Student("fahad","khan");
// console.log(stu);

// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(function(result){
//    console.log(result)

//   })
//   .catch(function(error){
// console.log(error)


//   })


// function getdata(){

//   let promise=new Promise(function(reslove,reject){

//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(response => response.json())
//     .then(function(result){
//   reslove(result)
  
//     })
//     .catch(function(error){
//   reject(error)
  
  
//     })
  
  
//   })

// promise.then(function(result){

// console.log("result",result);
  
// })

// .catch(function(error){

// console.log("error",error);

// })

// }
 
// getdata();


// function example(data){

// console.log("data",data);

// }


// function addtocart(){

// var pro={



// }

// var arr=[];

//  arr.push(pro);

//  localStorage.setItem("cart",arr);






// }


let sighup=()=>{

var email=document.getElementById('email');
var password=document.getElementById('pass');
firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((result)=>{

console.log(result);

})




.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error);
});


}


let login=()=>{


  var email=document.getElementById('lo-email');
  var password=document.getElementById('lo-pass');
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((result)=>{
    console.log("login suffeslly")
    console.log(result);
    
    
    })
  
  
  
  
  
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  })


}


