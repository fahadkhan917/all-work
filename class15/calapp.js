function getnumber(num){
console.log(num);
var result=document.getElementById("result");
result.value+=num;


}

function clearr(){
    var result=document.getElementById("result");
    result.value="";

}

function getresult(){

var result=document.getElementById("result");
result.value=eval(result.value);

}