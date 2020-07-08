/*
for(var i=0;i<=10;i++){

document.write("2"+"*"+i+"="+2*i+"<br>");

}

var arr=["fahad","ali","umer"];

for(var i=0;i<arr.length;i++){

    document.write(arr[i]);

}

var city=["karachi","lahore","islamabad","faislabad"];
for(var i=0;i<city.length;i++){
    if(city[i]==="lahore"){
 document.write(city[i]+"is the clean city");

    }


}

for(var i=0;i<10;i++){
  if(i==5){
    document.write(i);
 break;

  }
    document.write(i);
}

var arr=["fahad","ali","saad"];
var arr1=["khan","umer"];
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr1.length;j++){

        document.write(arr[i]+" "+arr1[j]);
    
    }

}


for(var i=0;i<5;i++){
    for(var j=0;j<5;j++){

        document.write("*");
    
    }
document.write("<br>");
}


var word=prompt("enter the name");
var check="";
for(var i=4;i>=0;i--){
check +=word[i];
}
if(check===word){
document.write(word+"this word");

}

var arr=[];
var size=2;
var check="";
for(var j=0;j<size;j++){

    arr[j]=prompt("enter the number");
    check +=arr[j];
    if(check<arr[j]){

        document.write(arr[j]+"largest number");
        
        }
 
        
}

var arr=[24,55,78,89];

var check=" ";
for(var j=0;j<4;j++){

    check +=arr[j];

    if(check<arr){

        document.write(arr[j]+"largest number");
        
        }
 
        
}

var name ="fahad";
var nam=name.toUpperCase();
document.write(nam);



var and="fahad";
var ne=and.slice(1,2);
document.write(ne);


var arr=[12,45,25,65];
var sum=0;
for(var i=0;i<arr.length;i++){

sum +=arr[i];


}
document.write(sum);






var frstnum=+prompt("enter the number");
var opr=+prompt("enter the number");
var secnum=+prompt("enter the number");

document.write("your sum is"+frstnum+secnum);

if(opr==="+"){

//document.write("your sum is"+frstnum+secnum);

}

var name="fahad khan";
for(var i=0;i<10;i++){
document.write(name[i].indexOf("a"));

}


var frstnum=prompt("enter the number");

var secnum=prompt("enter the number");
var opr=prompt("enter the sign");

if(opr==='+'){

document.write((+frstnum)+(+secnum));

}
else if(opr==='-'){

    document.write("your sub is"+frstnum-secnum);
    
    }
   else if(opr==='*'){

        document.write("your sum is"+frstnum*secnum);
        
        }
       else if(opr==='/'){

            document.write("your sum is"+frstnum/secnum);
            
            }

         

var equ=prompt("enter the eqaution");
var num=equ.length;
for(var i=0;i<num;i++){
if(equ.slice(i,i+1)==='+'){
document.write("sigh has found");
}
}
*/ 

    