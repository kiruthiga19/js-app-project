// let name="kiruthiga"
// let greeting =" hi , my name is  "
//  let myGreeting =  greeting+ name
//  console.log(myGreeting)
// let welcome = document.getElementById("welcome-el")
// let name = "kiruthiga"
// let greeting = "welcome back "
// welcome.innerText= greeting+ name
// let name="linda"
// let greeting="hi there"
// function create(){
//     console.log(greeting+","+name+"!")
// }
// create()
// let errorpara = docume.ge.....(error)
//function purchase(){
    //console.log("button clicker")
    //errorpara.innertext="something wen wert"
//}
//****************************for loop*********************************** */
// let a=[1,2,3]
// for(let i=0;i<=a.length;i++){
//     console.log(a[i])
// }
// **************************************one method of calling function*******************************************
// let a=2;
// let b=4;
// function add () {
//     console.log(a*b);
// }
// add()
// *********************************another method*************************************************
// function add(){
//     return (2+3)
// }
//console.log(add())
// ********************************************* to copy one array to anther**********
// const arr=[1,2,3,4,5,6,7]
//  const obj=[...arr]
// console.log(obj)
// var can=["2,3,3,4,5,6"]
// can.push(1)
// console.log(can)
//*******************function******************************************* */
// add1=()=>{
//     return(2+3)
// }
// console.log(add1())
// let a="2"
// let b=2
// if(a===b){
//     console.log("true")
// }
// else{
//     console.log("false")
// }





//*********************************ARRAY METHODS************************************************************8 */

//*************shift -> it removes the data from first ************************ */
//  let arr=['1','2','3']
//  console.log(arr.shift())
//  console.log(arr)

//**********************unshift-> it add the element in first possition************************** */
//  let arr=['1','2','3']
//  console.log(arr.unshift(11,"sjshdiu"))
//  console.log(arr)

//*********************splice************************************* */
// let arr=['1','2','3','4','5','6']
//  console.log(arr.splice(2))     //it remove all the element after the index posistion of 2
//   console.log(arr)
//*****to reove only element on that index position use like this************* */
// let arr=['1','2','3','4','5','6']
//  console.log(arr.splice(2,1))     //it remove only the index position if we want to remove more then 2 e;ement then add (2,2)like that 
//   console.log(arr)
//*****************************to add the element after deleting the value */
// let arr=['1','2','3','4','5','6']
// console.log( arr.splice(2,2,11) )
//  console.log(arr)
//******************if you want to add the element but dont remove any element in an array */
// let arr=['1','2','3','4','5','6']
// console.log( arr.splice(2,0,11) )
//  console.log(arr)

//*******************to display the index value********************************** */
// let a =["s",'a','p','k']
// console.log(a.indexOf('p'))
//***************to check the value present in the array */
// let a =["s",'a','p','k']
// console.log(a.includes('k'))
//******************************to do not display the array but separated by , is */
// let a =["s",'a','p','k']
// console.log(a.join(","))
 //************** split-> to split the paragrap and displayed in array function *************************** */
// let s= "a,b,c,d"
// let k=s.split(',')
// console.log(s)
//  console.log(k)
//*****************filter******************************888 */
// let books=[{
//     bookname:"elonmusk-biography",author:"denish-riche",price:500
// },
// {
//     bookname:"richdad-poordad",author:"rabart-kisochaki",price:250
// },
// {
//     bookname:"power-of-your-subconsious-mind",author:"denish-riche",price:600
// }
// ]
// let filterbook=books.filter((books)=>{
//     return books.price<300
// })m 
// console.log(filterbook)
//*************************************map**************************************** */
// let books=[{
//     bookname:"elonmusk-biography",author:"denish-riche",price:500
// },
// {
//     bookname:"richdad-poordad",author:"rabart-kisochaki",price:250
// },
// {
//     bookname:"power-of-your-subconsious-mind",author:"denish-riche",price:600
// }
// ]
// let filterbook=books.map((bo)=>{
//     return bo.bookname
// })
// console.log(filterbook)
//*****************find*************************** */
// let cartoons=[
//     {
//         name:"shinchan",mom:"mitzie",dad:"hari",dog:"sheero"
//     },
//     {
//         name:"doremon",mom:"sisuka",dad: "nobita",dog:"no dog"
//     },
//     {
//         name:"chotabeem",mom:"indu",dad:"jaku",dog:"raju"
//     }

// ]
// let findcartoons=cartoons.find((hoo)=>
// {
//     return hoo.name==="shinchan"
// })
// console.log(findcartoons)
//********************foreach****************************** */
// let cartoons=[
//     {
//         name:"shinchan",mom:"mitzie",dad:"hari",dog:"sheero"
//     },
//     {
//         name:"doremon",mom:"sisuka",dad: "nobita",dog:"no dog"
//     },
//     {
//         name:"chotabeem",mom:"indu",dad:"jaku",dog:"raju"
//     }

// ]
// cartoons.forEach((cartoo)=>
// {
//     console.log(cartoo.name)
// })
//****************some and every**************************************** */
// let cartoons=[
//     {
//         name:"shinchan",mom:"mitzie",dad:"hari",dog:"sheero"
//     },
//     {
//         name:"doremon",mom:"sisuka",dad: "nobita",dog:"no dog"
//     },
//     {
//         name:"chotabeem",mom:"indu",dad:"jaku",dog:"raju"
//     }

// ]
// let name=cartoons.some((cartoo)=>
// {
//     return cartoo.name=="shinchan"
// })
// console.log(name)
//**************************reduce************************************************** */
// let books=[{
//     bookname:"elonmusk-biography",author:"denish-riche",price:500
// },
// {
//     bookname:"richdad-poordad",author:"rabart-kisochaki",price:250
// },
// {
//     bookname:"power-of-your-subconsious-mind",author:"denish-riche",price:600
// }
// ]
// let filterbook=books.reduce((current,bo)=>{
//     return bo.price+current
// },0)
//console.log(filterbook)
//********************************sort********************************************************* */ 
// let numbers=[20,50,10,700,2,90,37]F
// numbers.sort(comparition)
// console.log(numbers.join(","))
// function comparition(a,b){
//     return b-a
// }
// console.log(arrange)
//let books=[{
    //     bookname:"elonmusk-biography",author:"denish-riche",price:500
    // },
    // {
    //     bookname:"richdad-poordad",author:"rabart-kisochaki",price:250
    // },
    // {
    //     bookname:"power-of-your-subconsious-mind",author:"denish-riche",price:600
    // }
    // ]
    // let filterbook=books.reduce((current,bo)=>{
    //     return bo.price+current
    // },0)
     //console.log(filterbook)
// let names=["sam","the","story","of","dog"]
// let variation=names.find((varm)=>{
//     return varm.names="sam"
// })
// console.log(variation)
// let a=[2,3,4,5,6,7]
// console.log(a.push(1))
// console.log(a)
//***************************to get a user input use prompt method
// var names=prompt("what is your name");
// alert("hello"+names+"!");
// var names=confrim("what is your name");


//************* code************************* */
// var age=prompt("what is your age");
// if (age < 18){
// var parrent_permision=confirm("yes i have parent permision");
// if(parrent_permision){
// alert("you are allowed ")
// }
// else{
// alert("you are not allowede");
// } 
// }
// else{
// alert("you are allowed");
// }