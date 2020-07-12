//setInterval => reapeatively running
//setTimeout => after sometime

// var count=0;
// var interval; 
// function time(){
//     count++;
//     document.write(count);
// document.write("hello");


// }

// interval=setInterval(time,1000); 

// setTimeout(function(){
//     clearInterval(interval)
// },10000)

// // function timeout(){

// // document.write("1 bar chala ga");


// // }


// setTimeout(timeout,1000);

// var min=0;
// var sec=0;
// var msec=0;
// var minhead=document.getElementById("min");
// var sechead=document.getElementById("sec");
// var msechead=document.getElementById("msec");
// var interval;

// function timer(){
// msec++;
// msechead.innerHTML=msec;
// if(msec>=100){
// sec++;
// sechead.innerHTML=sec;
// msec=0;
// }
// else if(sec>=60){
// min++;
// sec=0;
// minhead.innerHTML=min;


// }

// }

// function start(){

//     interval=setInterval(timer,10);
//     var st=document.getElementById("strt").style.visibility="hidden";
// }

// function stop(){
// clearInterval(interval)

// }


// function reset(){
// min=0;
// sec=0;
// msec=0;
// minhead.innerHTML=min;
// sechead.innerHTML=sec;
// msechead.innerHTML=msec;
// stop();

// }

///dom

//Documnnt object model


// console.log(document.childNodes[1].childNodes[1].childNodes[0] );


// var a=document.getElementById("papa");
// console.log(a.childNodes[1]);

//firstchild
// var a=document.getElementById("papa");
// console.log(a.firstChild);



//nextsibling
// var a=document.getElementById("firstson");
// console.log(a.nextSibling);

//lastchild
// var a=document.getElementById("papa");
// console.log(a.lastChild);

//parentNode
// var a=document.getElementById("secson");
// console.log(a.parentNode);

//nodetype yeh 1 or 3 number mae return kara gai
// var a=document.getElementById("firstson");
// console.log(a.nodeType);

//nodetype
// var a=document.getElementById("firstson");
// console.log(a.childNodes[0].nodeType);

//Nodename tag ka bara mae btaya ga htm ka wo kon sa hai
// var a=document.getElementById("firstson");
// console.log(a.nodeName);


//node value or bina tag ka access karna hai tw esa kara ga
// var a=document.getElementById("papa");
// console.log(a.childNodes[0].nodeValue);


var a=document.getElementById("papa");
console.log(a.childNodes);