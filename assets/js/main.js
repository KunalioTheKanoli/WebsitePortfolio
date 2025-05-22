document.addEventListener("DOMContentLoaded",()=>{document.getElementById("year").textContent=new Date().getFullYear();});
const revealTargets=document.querySelectorAll(".content-reveal");
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible");});},{threshold:.2});
revealTargets.forEach(el=>observer.observe(el));
