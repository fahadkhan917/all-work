import React from 'react';



class Footer extends React.Component{
constructor(){
super()
this.state={
name:"asad",
email:"asadkhan123@gmail.com"

}
}

set_name=()=>{
this.setState({
name:"huma"


})


}


render(){
return(
<div>
<h3>{this.state.name}</h3>
<h2>Footer</h2>

<button onClick={this.set_name}>change</button>
</div>

)
}
}


class Footerdown extends React.Component{
render(){
return(
<div>
<h3>Footer down</h3>

</div>
    
)


}



}

export{

Footer,
Footerdown

}