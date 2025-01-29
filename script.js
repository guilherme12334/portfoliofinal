document.addEventListener("DOMContentLoaded", function () {
    const hamburg = document.querySelector(".hamburg");
    const dropdown = document.querySelector(".dropdown");
    const cancel = document.querySelector(".cancel");

    function toggleMenu() {
        dropdown.classList.toggle("active");
    }

    hamburg.addEventListener("click", toggleMenu);
    cancel.addEventListener("click", toggleMenu);

    // Fechar o menu ao clicar em um link
    document.querySelectorAll(".dropdown .links a").forEach(link => {
        link.addEventListener("click", () => {
            dropdown.classList.remove("active");
        });
    });
});

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "FOOTBALL COACH"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter