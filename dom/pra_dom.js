// function popup(mess){
// alert(mess)


// }

// function bye(){

// alert("pagal")

// }

// function makeyellow(){

// var ele;
// ele=document.getElementById("txt").style.backgroundColor="yellow";
// console.log(ele);

// }

// function makered(){

//     var ele;
//     ele=document.getElementById("txt").style.backgroundColor="red";
//     console.log(ele);
    
//     }

// function checkadress(feildid){
// if(document.getElementById(feildid).value==="");
// alert("email address required");

// }


// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//      case "60608" :
//      cityName = "Chicago";
//      break;
//      case "68114" :
//      cityName = "Omaha";
//      break;
//      case "53212" :
//      cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
//      document.write(cityName)
//      }
    
function getcity(){
    var cityname;
    var zipp=document.getElementById("zip").value;
    switch(zipp){
   case "123":
   cityname="karachi";




    }

document.getElementById("btn").value=cityname;
document.write(cityname);

}
