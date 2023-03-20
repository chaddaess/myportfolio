let ab=document.querySelector("p"); 
let skills=document.querySelector(".talking"); 

addEventListener("mouseover",(event)=>{
   if(event.target.matches("p"))
        event.target.style.color="blue";
})

addEventListener("mouseout",(event)=>{
    if(event.target.matches("p"))
    event.target.style.color="";
});


addEventListener("mouseover",(event)=>{
    if(event.target.matches("a"))
         event.target.style.color="#df0f70";
 })
 
 addEventListener("mouseout",(event)=>{
     if(event.target.matches("a"))
     event.target.style.color="";
 }); 


toggle(skills, 2000, "on","off","hey");
 
/**
 * this function allows an element to toggle between to states endlessly every "timer" milliseconds 
 * @param element element to treat
 * @param timer time interval in which change is made 
 * @parm ...classes a var-args: classes between which you want to toggle
 * */

function toggle(element, timer, ...classes) {
    setInterval(() => {
      classes.forEach((classe) => {
        element.classList.toggle(classe);
      });
    }, timer);
  }








