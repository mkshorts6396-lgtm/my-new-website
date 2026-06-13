const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => 
{
    navLinks.classList.toggle("active");
});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight-100){
card.classList.add("show");
}

});

});
