document.getElementById("name").innerText="BOBo kr";
let box1=document.getElementsByClassName("mimi")[0].style.backgroundColor="blue";

let newDiv=document.createElement("div");
newDiv.innerText="hihi";

newDiv.style.backgroundColor="yellow";
newDiv.style.width="100px";
newDiv.style.height="100px";

document.body.appendChild(newDiv);

hideElement= document.querySelector("#hide");
hideElement.style.display="none";


let smallBox=document.getElementsByClassName("bx");
smallBox[smallBox.length-1].style.display="none";

let frame=document.getElementById("image-frame");
frame.style.backgroundImage="url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

let toggle=document.getElementById("toggle");
toggle.classList.add("hi");
toggle.classList.remove("hi");


let colors = ["red", "blue", "green", "yellow", "blue", "magenta", "lightgoldenrodyellow"];
let count = 0;
let colorBox = document.getElementById("color-box");

let colorButt = document.getElementById("count");


function changeColor() {
    colorBox.style.backgroundColor = colors[count % colors.length];
    count++;
}

colorButt.addEventListener("click", changeColor);
