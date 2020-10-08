import React from 'react';
import Button from '@material-ui/core/Button';
import Logo from './image/download.png';





class Header extends React.Component{
render(){
  
return(

<div>
<img src={Logo} width="100"/>
<h3>{this.props.page}</h3>
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
 
return(

   <div>
   <h1>{c}</h1>
 
   <h1>Does</h1>
   <Button variant="outlined">Default</Button>
<Button variant="outlined" color="primary">
  Primary
</Button>

   </div> 
   


)


}


}




export{

Header,
Doe

}


