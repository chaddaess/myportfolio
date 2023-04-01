let butt=document.querySelector("#LearnMore");
let closeBtn = document.querySelector("#close");
let hidden=document.querySelector("#carouselExampleControls"); 

butt.addEventListener('click',()=>{
    hidden.style.display='block';
    closeBtn.style.display='block';
  

});

closeBtn.addEventListener('click',()=>{
    hidden.style.display='none';
    closeBtn.style.display='none';
  

});