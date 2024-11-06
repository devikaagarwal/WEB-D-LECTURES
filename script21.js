let button = document.getElementById('btn');
// let button = document.getElementsByClassName('btn');
// let button = document.querySelector('#btn');
// let button = document.querySelectorAll('#btn');
let para=document.querySelector('.text');

button.addEventListener("click",()=>{
    para.innerHTML="<h1>good morning</h1>";
    // para.style.color="red";
    para.classList.add("para4");
    // let paraChild = para.childNodes[0];
    para.style.border="2px solid green";
    para.style.backgroundColor="grey";
})

// para.innerText="Hello world";

// console.log(button);
// console.log(paraChild);

