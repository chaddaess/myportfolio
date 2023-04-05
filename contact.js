let picture=document.querySelector("#backToTop"); 



addEventListener("mouseover",(e)=>{
    if(e.target.matches("img")&& e.target!==picture) 
    e.target.style.height="103%";
    e.target.style.wifth="103%";

})


addEventListener("mouseout",(e)=>{
    if(e.target.matches("img"))
    e.target.style.height="";
    e.target.style.wifth="";

})  





