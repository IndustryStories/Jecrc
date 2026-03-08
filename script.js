
let btn1= document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button was clicked by 1 event handler");
})
let btn2=document.querySelector("#btn2");
btn2.addEventListener("dblclick",()=>{
    console.log("button was clicked by 2nd event handler");
})
let btn3=document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
    console.log("button was clicked by third event handler");
})

let p1= document.querySelector("#p1");
console.log(p1.innerHTML);