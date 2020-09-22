import React from 'react';
import './App.css';

// class App extends React.Component{
// render(){
//   return(
// <div>

// <h1>hello</h1>

// </div>
//   )

// }


// }


function App(){
  let finame="ali";
  let lname="khan";
  let arr=[1,4,5,7,8,65];
  var sum=0;
  for(var i=0;i<arr.length;i++){

   sum+=sum+arr[i];

  }



return(
<div>
<h2>{`${finame}${lname}`}</h2>
<h2>{arr}</h2>

<h2>{sum}</h2>
</div>


)



}

export default App;
