let scrollContainer= document.querySelector(".gallery");
let backBtn=document.getElementById("backbtn");
let nexrBtn=document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    
    scrollContainer.scrollLeft +=event.deltaY;
    scrollContainer.style.scrollBehavior="auto"
})

nexrBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"
    scrollContainer.scrollLeft += 900
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth"

    scrollContainer.scrollLeft -= 900
})