

// var a={

// name:"fahad",
// age:21,
// abc:function(){

//     document.write("umer")

// }

// }
// document.write(a.abc())


// function Student(name,roll){
// this.name=name;
// this.roll=roll;


// }

// var student1=new Student("fahad",456);
// var student2=new Student("ahad",123);
// console.log(student1);
// console.log(student2);

// function Student(name,roll){
//     this.name=name;
//     this.roll=roll;
//     this.getName=function(){

// return this.name;

//     }
    
//     }

//     var student1=new Student("fahad",456);
//     var student2=new Student("ahad",123);
//     console.log(student2.getName())
// function Student(name,roll){
//         this.name=name;
//         this.roll=roll;
    

//     Student.prototype.getName=function(){

//     return this.name;

    
// }
// }

// var student1=new Student("fahad",456);
// console.log(student1.getName())


// var student={

// name:"ali",
// roll:123,
// school:"abcscholl"

// }
// // console.log("roll" in student);

// for(var prop in  student){

// console.log(prop,student[prop]);

// }

// console.log(student.hasOwnProperty("roll"));

function saveData(){

var name=document.getElementById('name');
var roll=document.getElementById('roll');

var student={

    name:name.value,
    roll:roll.value


}
console.log(student);
}
