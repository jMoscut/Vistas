

const menu = document.getElementById("menu");
const barraLateral = document.querySelector(".barra-lateral");
const span = document.querySelector("span");

settns.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    span.classList.toggle("oculto");
})


