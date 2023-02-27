const menuBtn = document.querySelector(".menu-icon span");
         const searchBtn = document.querySelector(".search-icon");
         const cancelBtn = document.querySelector(".cancel-icon");
         const items = document.querySelector(".nav-items");
         const form = document.querySelector("form");
         menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }
         cancelBtn.onclick = ()=>{
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           searchBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           form.classList.remove("active");
           cancelBtn.style.color = "#ff3d00";
         }
         searchBtn.onclick = ()=>{
           form.classList.add("active");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }

const scrollBtn = document.querySelector('.scroll-top')
// Scrooltop First Function
window.addEventListener('scroll',function(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        scrollBtn.style.display="block"
    }
    else{
        scrollBtn.style.display="none"
    }
})
// Scrooltop Second Function
scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})


