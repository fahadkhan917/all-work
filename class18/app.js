// function a(){


// var ele=document.getElementById("ab");
// ele.disabled=true;

// }



// var ele=document.getElementsByTagName("p");
// ele[0].innerHTML="fahad";

// var ele=document.body.childNodes[13];
// var b=ele.nodeType;
// if(b==1){

// ele.innerHTML="fahad";

// }


// var ele=document.getElementById("boss");
// var b=ele.childNodes[1];
// b.style.backgroundColor='green';


// function abc(){

// var num1=document.getElementById("nu1").value;
// var num2=document.getElementById("nu2").value;
// var opr=document.getElementById("opr").value;

// if(opr=="+"){
//     var sum=+num1+(+num2);
//     para.value=sum;
// }


// else if(opr=="-"){
//     var sum=+num1+(+num2);
//     para.innerHTML=sum;
// }
// }

function abc(){

var num1=document.getElementById("num").value;
for(var i=0;i<10;i++){
    var b=num1*i;
    para.innerHTML=b;
   console.log(b);
}

}

// var user=prompt("enter the number");
// for(var i=0;i<10;i++){

// document.write(user*i);

// }