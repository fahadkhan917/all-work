// todo application cover

var lis=document.getElementById("list");
function to(){

    var lis=document.getElementById("list");
var v=document.getElementById("val");
var l=document.createElement('li');
var txtli=document.createTextNode(v.value);
l.appendChild(txtli);
lis.appendChild(l);


//deltebtn
var dlebtn=document.createElement("button");
var deltxt=document.createTextNode("delete");

dlebtn.appendChild(deltxt);
dlebtn.setAttribute("onclick","deletedbtn(this)");
l.appendChild(dlebtn);


//editbtn
var editbtn=document.createElement('button');
var edittxt=document.createTextNode('edit');
editbtn.appendChild(edittxt);
l.appendChild(editbtn);
editbtn.setAttribute("onclick","edit()");

}
function delall(){

list.innerHTML="";

}


function deletedbtn(e){
console.log(e)


}


function edit(){



}

// object



// var web={
// // properties :value    
// t1:"ali",
// t2:"fahad",
// t3:"asad"

// }
// web.t4="umer";//Add one string
// web.t5=["ahad","umair"];//add array in object
// // array aslo return object
// document.write(web.t5[0]);

// //check a porpertie in object
// var w="t5" in web;
// document.write(w);


// var myQuestion=[
//     {
//   question:"what is your name",
//   answer:{
//  a:"fahad",
//  b:"asad",
//  c:"umer"

//   },
// cor:"c"

//     }
// ]