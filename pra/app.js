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


// var a="fa!had";
// for(i=0;i<a.length;i++){
// if(a.charCodeAt(i)===33){

// document.write("yes is here")
// }
// }


// var user=prompt("enter the user");
// var newstring="";
// for(var i=user.length-1;i>=0;i--){

// newstring+=user[i];

// }
// if(user===newstring){

//     document.write("yes");
// }

// else{

// document.write("soory");

// }


// var pass=prompt("enter the password");
// var passwordvalue;
// if(pass.length>6){

// alert("yes it lenght is greater than 6");


// }

// else{

// alert("soory");

// }


// var arr=[25,56,45,55];
// var val=arr[0];
// for(var i=0;i<arr.length;i++){
// if(arr[i]<val){
// val=arr[i];

// }
// }


// document.write("largest value"+val);

// var a=prompt("enter the word");
// var num="";
// for(var i=a.length-1;i>=0;i--){

// num+=a[i];

// }

// if(a==num){


//     document.write("yes");
// }

// else{

//     document.write("soory")
// }



// for(i=1;i<=100;i=i+10){
//  for(j=i;j<=i+9;j++){
// document.write(j);

//  }
// document.write("<br>")
// }

// for(i=0;i<=5;i++){
// for(j=0;j<i;j++){
// document.write("*");

// }
// document.write("<br>");
// }

// var uni="karachi of university";
// for(var i=0;i<uni.length;i++){

// document.write("<BR>"+uni[i].split(''))

// }

// function abc(){

// var val=document.getElementById('val').value;
// var para=document.getElementById('para');
// var num="";
// for(var i=val.length-1;i>=0;i--){
// num+=val[i];

// }
// if(val===num){

// para.innerHTML="yes";

// }

// else{

//     para.innerHTML="sorry";

// }

// }


// function abc(){

// var val1=document.getElementById('val1').value;
// var val2=document.getElementById('val2').value;
// var val3=document.getElementById('val3').value;
// var val4=document.getElementById('val4').value;
// var para=document.getElementById('para');
// var text="smaller number"
// var arr=[val1,val2,val3,val4];
// var num=arr[0];
// for(var i=0;i<arr.length;i++){
// if(arr[i]<num){
// num=arr[i]

// }


// }

// para.innerHTML=text+num;

// }



// var a="the quick brown fox jumps over the lazy dog";
// var count=a.match(/the/g);
// document.write(count.length);

// var a=new Date();
// document.write(a);


// var num=prompt("enter the number");
// document.write("number is"+num);
// var round=Math.round(num);
// document.write("round"+round);
// var floo=Math.floor(num);
// document.write("floor"+floo);
// var ceilvalue=Math.ceil(num);
// document.write("ceil"+ceilvalue);

// var user=prompt("enter the number");
// var absval=Math.abs(user);
// document.write(absval);

// var randvalue=Math.floor(Math.random()*6);
// document.write("the value of the dice is"+randvalue);

// var rand=Math.floor(Math.random()*2)+1;
// if(rand===1){

//     document.write("tails");
// }
// else if(rand===2){

// document.write("headd");


// var rand=Math.floor(Math.random()*100);
// document.write(rand);


// var user=prompt("enter your weight");
// var parse=parseInt(user);
// document.write("the weight of the user is"+parse);


// var user=prompt("enter the secret number");
// var rand=Math.floor(Math.random()*10)+1;
// if(user===rand){
// alert("congratulations!you are right");

// }
// else{
// alert("try again");

// }


// var curr=new Date();
// document.write(curr);


// var month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentmonth=curr.getMonth();
// document.write(month[currentmonth]);


// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var currday=curr.getDay();
// document.write("today is"+days[currday]);

// if(currday==0 || currday==6){
// document.write("today is funday");

// }


// var teach={a:"fahad",b:2,c:"ali"};
// teach.d="umer";
// document.write(teach.d)



// function sqr(a){

// document.write(a*a);

// }
// sqr(prompt("enter the value"));

// var sum=0;
// function fractional(num){

// var fact;
// for(var i=0;i<num;i++){
// fact=num*i;
// sum=sum+fact;


// }
// document.write(sum)

// }

// fractional(4);

// function counting(firstNumber,lastNumber){

//     for(i=firstNumber;i<=lastNumber;i++){

//         document.write("<br>"+i);
//     }

// }

// counting(12,19)



// function titlecase(str){

//     str=str.toLowerCase().split(' ');
//    for(var i=0;i<str.length;i++){
//     str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
   

//    }
// document.write(str)
  
// }

// titlecase('the quick brown fox');


// var a="fahad khan mae";
// a=a.split(' ');
// for(var i=0;i<a.length;i++){

// a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
// document.write(a[i]);

// }


// function find(str){

// var array1=str.match(/\w[a-z]{0,}/gi);
// var result=array1[0];

// for(var i=0;i<array1.length;i++){

// if(result.length<array1[i].length){
// result=array1[i]

// }

// }
// return result;
// }

// document.write("find"+find('web developnment tutorail'))

// var str="fahad khan  ali";
// var res=str.match(/\w[a-z]{0,}/gi);
// document.write(res.length);




// function titleCase(str) { 
//     str = str.toLowerCase().split(' '); 
//     for (var i = 0; i < str.length; i++) { 
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
//     } 
//     return str.join(' '); 
//   } 
//   document.write("<br> The String in Title Case is "+titleCase('the quick brown fox')); 

// }
// var list=document.getElementById('lists');
// function abc(){

// var val=document.getElementById('val').value;
// var li=document.createElement('li');
// var listtext=document.createTextNode(val);
// li.append(listtext);
// list.append(li);
// }




//chapter 1
// alert("welcme to happy coding");

// alert("welcome to js land \n happy coding")


// var myname="fahad";


// var mes="hellow world";
// alert(mess);


// var a="pizza";
// alert(a+"\n"+a.slice(0,-1)+"\n"+a.slice(0,-2)+"\n"+a.slice(0,-3)+"\n"+a.slice(0,-4))

// var email="fk16181@gmail.com";
// alert(email);


// var a="a smarter way to learn javascript";
// alert(a);

// var a="yah! i can write a HTML content throught javascript";
// document.write(a);

// var age=15;
// alert("i am "+age+old);


// var birth=1994;
// document.write(birth);
// document.write("data type of my declared variable is"+typeof(birth))


// var a=3;
// var b=5;
// document.write("sum of"+a+"and"+b+"is"+(a+b));

// var a=3;
// var b=5;
// document.write("sum of"+a+"and"+b+"is"+(a+b));

// var a=3;
// var b=5;
// document.write("sub of"+a+"and"+b+"is"+(a-b));


// var a=3;
// var b=5;
// document.write("multiplication of"+a+"and"+b+"is"+(a*b));

// var a=3;
// var b=5;
// document.write("divide of"+a+"and"+b+"is"+(a/b));

// var a=3;
// var b=5;
// document.write("modulus of"+a+"and"+b+"is"+(a%b));

// var num1;
// document.write("value after varaible declaration is"+num1+"<br>");
// num1=5;
// document.write("Initial value"+num1+"<br>");
// num1++;
// document.write("increment value"+num1+"<br>");
// num1=num1+7;
// document.write("value after add"+num1+"<br>");
// num1--;
// document.write("value after decrement is"+num1+"<br>");
// num1=num1/3%1;
// document.write("The remainder is"+num1);

// var price=600;
// var tic=5;
// document.write("total cost to buy"+tic+"Tickets to a movie is"+price*tic);


// var num=4;
// document.write("table of"+num+"<br>");
// for(var i=1;i<=10;i++){

// document.write(num+"x"+i+"="+num*i+"<br>");

// }


// var priceofitem1=650;
// var priceofitem2=100;
// var quaofitem1=3;
// var quaofiten2=7;
// var shipingcharges=100;

// document.write("price of item 1 is"+priceofitem1+"<br>");
// document.write("Quantity of item 1 is"+quaofitem1+"<br>");
// document.write("Price of item 2 is"+priceofitem2+"<br>");
// document.write("Quantity of item 1 is"+quaofiten2+"<br>");
// document.write("Shiping charges"+shipingcharges+"<br>");
// total=(priceofitem1*quaofitem1)+(priceofitem2*quaofiten2)+shipingcharges;
// document.write("total cost of your order is"+total);


// var totalmark=980;
// var markobt1=420;
// var markobt2=380;
// var totalobt=markobt1+markobt2;
// var per=totalobt/totalmark*100;
// document.write("total marks"+totalmark);
// document.write("Marks obtained"+totalobt);
// document.write("percantage"+per);

// var usa=104.80;
// var riyal=28;
// var total=(usa*10)+(riyal*25);
// document.write("total"+total);


// function abc(){

// var getimg=document.getElementById("getimg")
// var setimg=document.getElementById("setimg");
// setimg.src=getimg.src;
// }

// var a=10;
// document.write("the value is"+a+"<br>");

// ++a;
// document.write("the value of a"+a+"<br>");

// a++;
// document.write("the value of a"+a+"<br>");

// --a;
// document.write("the value of a"+a+"<br>");

// a--;
// document.write("the value of a"+a+"<br>");

// var user=prompt("enter the word");
// var chk="";
// for(var i=user.length-1;i>=0;i--){
// chk+=user[i];
    

// }
// if(user===chk){
// document.write("yes");

// }
// else{
// document.write("sorry");

// }

// var a="hello world";
// a=a.split(' ');
// for(var i=0;i<a.length;i++){
// a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1);
// document.write(a[i]);
// }

// var a=[15,45,65,78,89];
// var larg=a[0];
// for(var i=0;i<a.length;i++){



// if(a[i]>larg){
// larg=a[i];

// }



// }
// document.write("largest number"+larg);

// var a="fahad";
// var b=a.match(/a/g);
// document.write(b.length);

// var a="web developnment world";
// var b=a.split(' ');
// var chk="";
// for(var i=0;i<b.length;i++){
    
// if(chk.length<b[i].length){
   
//     chk=b[i];
  

// }


// }
// document.write(chk)

// function find(str){

//     var array1=str.match(/\w[a-z]{0,}/gi);
//     var result=array1[0];
    
//     for(var i=0;i<array1.length;i++){
    
//     if(result.length<array1[i].length){
//     result=array1[i]
    
//     }
    
//     }
//     return result;
//     }
    
//     document.write("find"+find('web developnment tutorail'))
    

// `var a=prompt("enter the name")
// for(var i=0;i<a.length;i++){

// if(a.charCodeAt(i)==97){

// document.write("yes");
// break;
// }

// }


// var a="fahad";
// var b=a.match(/a/gi);
// document.write(b.length);

// var a=0;
// while(a<5){

//     document.write("fahad"+"<BR>");
//     a++;

// }

// var a=prompt("enter the name");
// var b=a.split(' ');
// for(var i=0;i<b.length;i++){

// b[i]=b[i].charAt(0).toUpperCase()+b[i].slice(1);
// document.write(b[i])
// }


// var a="university of karachi";
// // var b=a.split('');

// for(var i=0;i<a.length;i++){

// document.write("<br>"+a[i]);

// }


// var a=prompt("enter the user");
// var chk=a.charAt(a.length-1)
// document.write(chk);

// var userInput=+prompt("Enter the number");
// document.write("<br>The number is "+userInput);
// var roundedValue=Math.round(userInput);
// document.write("<br>The rounded  number is "+roundedValue);
// var floorValue=Math.floor(userInput);
// document.write("<br>The floor number is "+floorValue);
// var ceilValue=Math.ceil(userInput);
// document.write("<br>The Ceil of the number is "+ceilValue);


// var userInput=+prompt("Enter the number");
// var absValue=Math.abs(userInput);
// document.write("<br>The value after doing the absolute is"+absValue);


// var randValue=Math.floor(Math.random() * 6) + 1;
// document.write("<br>The value of the dice is"+randValue);

// var randomValue=Math.floor(Math.random()*2)+1;
// if(randomValue===1)
// {
//     document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Tails");

// }
// else if(randomValue===2)
// {
//     document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Heads");

// }


// var randValue=Math.floor(Math.random() * 100) + 1;
// document.write("<br>The random value between 1 and 100 is "+randValue);

// var a="fahad khan ho mae";
// var b=a.split(' ');
// var chk="";
// for(var i=0;i<b.length;i++){
// if(chk.length<b[i].length){

//     chk=b[i]

// }


// }
// document.write(chk);

// var a=new Date();
// document.write(a);


// function abc(e){

//     var val=document.getElementById('val');
//     val.value+=e;

// }

// function op(){

//     var val=document.getElementById('val');
//    val.value=eval(val.value)

// }

// function cle(){


//     var val=document.getElementById('val');
//     val.value=" ";

// }
// var month=["jan","feb","march","april","may","june","july","aug","sep"];
// var a=new Date();
// var b=a.getMonth();
// var nameofmonth=month[b];
// document.write(nameofmonth);

// var day=["sun","mon","tue","wed"];
// var a=new Date();
// var b=a.getDay();
// var nowday=day[b];
// document.write(nowday)

