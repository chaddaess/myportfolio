let butt=document.querySelector("#LearnMore");
let closeBtn = document.querySelector("#close");
let hidden=document.querySelector("#carouselExampleControls"); 
let proj2= document.querySelector("#project2");
let closeBtn2=document.querySelector("#close2");
let hidden2=document.querySelector(".projDescription"); 
let butt2=document.querySelector("#LearnMore2");
let proj1= document.querySelector("#project1");



butt.addEventListener('click',()=>{
    hidden.style.display='block';
    closeBtn.style.display='block';
    proj2.style.display='none';
  

});

closeBtn.addEventListener('click',()=>{
    hidden.style.display='none';
    closeBtn.style.display='none';
    proj2.style.display='block';
  

});
butt2.addEventListener('click',()=>{
    hidden2.style.display='block';
    closeBtn2.style.display='block';
    proj1.style.display='none';
  

});
closeBtn2.addEventListener('click',()=>{
    hidden2.style.display='none';
    closeBtn2.style.display='none';
    proj1.style.display='block';
  

});