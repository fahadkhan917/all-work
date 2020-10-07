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

set_name=()=>{
this.setState({
name:"ali"

})


}

get_name=()=>{

  console.log(this.state.name);

}

render(){
return(

<div>
  <Header/>
<h1>hellow</h1>
<h3>{this.state.name}</h3>
<h4>my email is{this.state.email}</h4>
<h5>my array is{this.state.a}</h5>
<input onChange={(e)=>this.set_name} type="text" placeholder="enter the value"/>
<button onClick={this.set_name}>Setname</button>
<button onLoad={this.get_name}>get name</button>
<Doe/>
</div>

)


}

}







export default App;
