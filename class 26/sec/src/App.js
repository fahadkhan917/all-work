import React from 'react';
import {Header,Doe} from './Header';
import './App.css';

class App extends React.Component{
constructor(){
super()
this.state={
name:"fahad",
email:"fk16181@gmail.com"


}
}

render(){
return(

<div>
  <Header/>
<h1>hellow</h1>
<h3>{this.state.name}</h3>
<input type="text" placeholder="enter the value"/>
<Doe/>
</div>

)


}

}







export default App;
