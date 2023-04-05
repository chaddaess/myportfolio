import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';

let butt=document.querySelector(".btn.btn-primary");
butt.addEventListener("mouseover",()=>
{   setTimeout(()=>
        {butt.style.border = "2px solid gold";
        butt.style.backgroundColor="gold";
        butt.style.color="black";
        butt.textContent="view my work ↓"; 
        },1)


}) 



butt.addEventListener("click", function() {
    window.location.href = "about.html";
  });
butt.addEventListener("mouseout",()=>{butt.style.backgroundColor= "black";
butt.textContent="view my work →";
butt.style.border = "";
butt.style.color="";})

