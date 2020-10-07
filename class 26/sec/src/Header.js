import React from 'react';


class Header extends React.Component{
render(){
return(

<div>

<h1>pagal</h1>

</div>


)


}



}


class Doe extends React.Component{

    
render(){
    var a=5;
    var b=5;
    var c=a+b;
    var z=prompt("enter the user");
return(

   <div>
   <h1>{c}</h1>
<h2>{z}</h2>
   <h1>Does</h1>

   </div> 


)


}


}


export{

Header,
Doe

}


