// var text="fAhad@";
// var txt="fAhad@";
// for(var i=0;i<text.length;i++){
// if(text[i]==charCodeAt){
//    document.write("yes");
// }
// }


// var text="fAhad";
// if(text.charCodeAt()){

// document.write("yes");

// }

// var a="5+10";
// var b=a.slice(0,-2);
// document.write(b);

// var a=10;
// document.write("THe value of a"+a+"<br>");

// ++a;
// document.write("THe value of a"+a+"<br>");

// var b=a++;
// document.write("THe value of a"+b+"<br>");


// var a=2;
// var b=1;
// var res=--a - --b + ++b +b--;
//      // 1   - 0  +  1  + 1 
// document.write(res);

// var user=prompt("enter the user");
// document.write("Hi"+user);

// var user=prompt("enter the number");
// if(user){
// document.write(user+"x1"+"="+user*1+"<br>");
// document.write(user+"x2"+"="+user*2+"<br>");
// document.write(user+"x3"+"="+user*3+"<br>");
// document.write(user+"x4"+"="+user*4+"<br>");
// document.write(user+"x5"+"="+user+"<br>");
// document.write(user+"x6"+"="+user+"<br>");
// document.write(user+"x7"+"="+user+"<br>");
// document.write(user+"x8"+"="+user+"<br>");
// document.write(user+"x9"+"="+user+"<br>");
// document.write(user+"x10"+"="+user+"<br>");
// }
// else{
//     document.write(5+"x1"+"="+5*1+"<br>");
//     document.write(5+"x2"+"="+5*2+"<br>");
//     document.write(5+"x3"+"="+5*3+"<br>");
//     document.write(user+"x4"+"="+5*4+"<br>");
//     document.write(user+"x5"+"="+5+"<br>");
//     document.write(user+"x6"+"="+user+"<br>");
//     document.write(user+"x7"+"="+user+"<br>");
//     document.write(user+"x8"+"="+user+"<br>");
//     document.write(user+"x9"+"="+user+"<br>");
//     document.write(user+"x10"+"="+user+"<br>");

// }

// var a=[24,56,72,21,45];
// var num=a[0];
// for(var i=0;i<a.length;i++){

//     if(a[i]>num){
//   num=a[i];

//     }
 
// }
// document.write("laragest number"+num);


// var a=[15,78,45,12,11];
// var num=a[0];
// for(var i=0;i<a.length;i++){
// if(a[i]<num){
// num=a[i];


// }

// }

// document.write("smallesgt number"+num)


// var a=prompt("enter the table");
// var len=prompt("enter the lenght");
// for(var i=1;i<len;i++){

//     document.write(a+"*"+i+"="+a*i+"<br>");

// }

// var a=["apple","mango","orange","banana"];
// for(var i=0;i<a.length;i++){

//     document.write("Element of"+a.indexOf(a[i])+"is"+a[i]+"<BR>")
// }

// document.write("counting");
// for(i=0;i<=15;i++){

//     document.write(i);
// }

// for(var i=15;i>0;i--){
// document.write(i);

// }

// for(var i=0;i<=20;i=i+2){
// if(i%2==0){
// document.write(i)

// }

// }

// for(var i=0;i<20;i++){
// if(i%2==1){
// document.write(i);

// }

// }

// for(var i=2;i<=20;i=i+2){
// document.write(i+"K");

// }
// var a=[20,50,40,70];
// var num=a[0];
// for(var i=0;i<a.length;i++){
// if(a[i]>num){
// num=a[i];

// }
// }
// document.write("largest number"+num);

// var user=prompt("enter the find in array");
// var a= ["cake","applepie","cookie","chips","patties"];

// for(var i=0;i<a.length;i++){
// if(a[i]==user){
   

// document.write("yes is here"+a.indexOf(a[i]));
// break;

// }

// if(i==5){
//     document.write("sorry");
// }

// }


// var arr=["ssc","hsc","bcs","bs","bcom","ms","M.phil","Phd"];
// for(var i=0;i<arr.length;i++){
// document.write(arr[i]+"<BR>");

// }

// var a=["fahad","asad","umer"];
// var fahadsc=[89,56,78];
// var asadsc=[56,45,78];
// var umersc=[45,64,91];
// var totalnum=500;
// document.write("score of"+a[0])
// var size=prompt("emter the size");
// var a=[];
// for(var i=0;i<size;i++){

// a[i]=prompt("enter the number");
// document.write(a[i]);

// }

// var a=[];

// for(var i=0;i<2;i++){

// a[i]=prompt("enter the number");
// var num="";
// if(a[i]>num){
// num=a[i]

// }
// }
// document.write("largest number"+num);

// var color=["red","blue","green","aqua"];
// document.write(color);
// var a=prompt("waht do you want add in first");
// color.unshift(a);
// document.write(color);
// var b=prompt("waht do you want add in first");
// color.pop(b);
// document.write(color);
// var c=prompt("enter the end color");
// color.push(c);
// document.write(color);
// var d=prompt("enter the 2 color");
// var e=prompt("enter the color");
// color.unshift(d,e);
// document.write(color);
// color.shift();
// document.write(color);
// var g=color.slice(0,2);
// document.write(g)
// color.splice(1,3,"ali")
// document.write(color)


// var sc=[320,120,45,78];
// sc.sort();

// document.write(sc);

// var city=["karachi","lahore","hyderabad","quetta"];
// var select=[];
// var a=city.splice(2,4);
// var b=select.concat(a);
// document.write(b);


// var arr=["this","is","my","cat"];
// var b=arr.join('');
// document.write(b);


// var arr=["apple","samsumg","motorola","nokia","sony","haier"];
// document.write("<select><option>"+arr[0]+"</option><option>"+arr[1]+"</option><option>"+arr[2]+"</option><option>"+arr[0]+"</option><option>"+arr[3]+"</option><option>"+arr[4]+"</option><option>"+arr[5]+"</option></select>")

// var arr=[];
// arr.push('keyboard','mouse','printer','monitor');
// document.write(arr.shift());
// document.write(arr.shift());
// document.write(arr.shift());
// document.write(arr.shift());


// var arr=[];
// arr.push('keyboard','mouse','printer','monitor');
// document.write(arr.pop());
// document.write(arr.pop());
// document.write(arr.pop());
// document.write(arr.pop());

// var a="samsung galaxy s6 edge plus";
// var len=a.length;
// document.write(len);

// var a="pakistani";
// var b=a.indexOf('n');
// document.write(b);


// var a="hello world";
// var b=a.lastIndexOf('l');
// document.write(b);

// var a="pakistani";
// var b=a.charAt(3);
// document.write(b);


// var a="hyderabad";
// var b=a.replace('hyder','islama');
// document.write(b);

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var b=message.replace(/and/g,'&');
// document.write(b);


// var num="472";
// document.write("sting"+num+"<br>");
// var b=Number(num);
// document.write(b);

// var a=prompt("enter the value");
// var b=a.toUpperCase();
// document.write(b);

// var a=prompt("enter the value");
// var b=a.slice(0,1);
// var c=b.toUpperCase();
// var d=a.slice(1,length[length-1]);
// var e=d.toLowerCase();
// var a=c+e;
// document.write(a);

// var num="35.36";
// var b=num.replace('.','');

// document.write(b);



// var a="karachi of university";
// var b=a.split('');
// for(var i=0;i<a.length;i++){
// document.write("<br>"+a[i]);

// }

// var a=prompt("enter plz");
// var b=a.length-1;
// document.write(b);


// var a="the quick brown fox jumps over the lazy dog";
// var count=a.match(/the/g).length;
// document.write("count of occuerence of the in the string is"+count);


// var user=prompt("enter the usename");
// for(i=0;i<user.length;i++){

//     if(user.charCodeAt(i)===33){
//    alert("please enter the valid username");

//     }
// }

// var a="fahad";
// var b=a.charCodeAt(2);
// document.write(b);


var a="fa!had";
for(i=0;i<a.length;i++){
if(a.charCodeAt(i)===33){

document.write("yes is here")
}
}