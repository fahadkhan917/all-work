import React from 'react';
import {Header,Doe} from './Header';
import './App.css';

class App extends React.Component{
constructor(){
super()
this.state={
name:"fahad",
email:"fk16181@gmail.com",
a:["ahad","ali","umer","asad"]


}
}

set_name(){

console.log("run")

}

render(){
return(

<div>
  <Header/>
<h1>hellow</h1>
<h3>{this.state.name}</h3>
<h4>my email is{this.state.email}</h4>
<h5>my array is{this.state.a}</h5>
<input type="text" placeholder="enter the value"/>
<button onClick={this.set_name}>Setname</button>
<Doe/>
</div>

)


}

}







export default App;
