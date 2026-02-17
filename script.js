
let btn1= document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button was clicked by 1 event handler");
})
btn1.addEventListener("click",()=>{
    console.log("button was clicked by 2nd event handler");
})

const handler3=()=>{
    console.log("button was clicked by third event handler");
};
btn1.addEventListener("click",handler3);
btn1.removeEventListener("click",handler3);