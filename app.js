// geting user input 
//normal method
                    //     let username=prompt("what is your name");
                    //    console.log(username)
//in dificult way to get a user input
let username;
document.getElementById("completed").onclick=function(){
    username=document.getElementById("textbox").value;
    console.log(username)
    document.getElementById("name").innerHTML=username;
}
                  // type converstion
// let age=prompt("enter your age");
// age=Number(age)
// age+=1;
// console.log("happy birthday",age,"years old")



                    // HYP CALCULATION PROGRAM

// let a;

// a=prompt("enter the value a")
// a=Number(a);
// let b;
// let c;
// b=prompt("enter the value b")
// b=Number(b);
// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log(c)
// let a;
// let b;
// let c;
//  document.getElementById("submitbutton").onclick=function(){
//     a=document.getElementById("alable").value;
//     a=Number(a);
    
//     b=document.getElementById("blable").value;
//     b=Number(b);
//     c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//     document.getElementById("clable").innerHTML=c;
//  }
                                    // counter program
// let count=0
// document.getElementById("decreasebtn").onclick=function(){
//     count-=1
//     document.getElementById("countlable").innerHTML=count;

// }
// document.getElementById("resetbtn").onclick=function(){
//     count=0
//     document.getElementById("countlable").innerHTML=count;
// }
// document.getElementById("increse").onclick=function(){
//     count+=1
//     document.getElementById("countlable").innerHTML=count;
// }
// let a="HELLO"
// a.slice(1)
// console.log(a.slice(0,2))
                                    // if statement
// document.getElementById("submitbtn").onclick=function(){
//    if(document.getElementById("fcheckbox").checked==true){
//   console.log("you are subscribed")
//    }
//    else{
//       console.log("you are not subscribed")

//    }
//    if(visa.checked){
//       console.log("you are paying on visa")
//    }
//    else if(cash.checked){
//       console.log("you are paying cash ")
//    }
//    else if(check.checked){
//       console.log("you are paying check ")
//    }
//    else{
//       console.log("please select one")
//    }
// }
// const visa=document.getElementById("visabtn");
// const cash=document.getElementById("cashbtn");
// const check=document.getElementById("checkbtn");
                                             // while loop
//  let username =" "
// while(username==""){
//    username = prompt("enter your name");
// }
// console.log("hello  "+username)
                                         //function
//  startprogram()                                       
//  function startprogram(){
//     let age=21
//     let name="sujdh"
//     birthday(age,name)
// }
// function birthday(a,b){
//     console.log("happy birthday ",a)
//     console.log("happy birthday ",b)
// }
 
                                               //return statment
let area;
let width=prompt("enter the width");
let height=prompt("enter the height");
area=triangle(width,height)
function triangle(width,height){
    area=width*height// or return width*height
    return area
}
console.log(area)

