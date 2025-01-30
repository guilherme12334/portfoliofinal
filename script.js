document.addEventListener("DOMContentLoaded", function () {
    // Seleção dos elementos do menu hambúrguer
    const hamburg = document.querySelector(".hamburg");
    const dropdown = document.querySelector(".dropdown");
    const cancel = document.querySelector(".cancel");

    function toggleMenu() {
        if (dropdown) {
            dropdown.classList.toggle("active");
        }
    }

    if (hamburg) {
        hamburg.addEventListener("click", toggleMenu);
    }

    if (cancel) {
        cancel.addEventListener("click", toggleMenu);
    }

    // Fechar o menu ao clicar em um link dentro do dropdown
    document.querySelectorAll(".dropdown .links a").forEach(link => {
        link.addEventListener("click", () => {
            if (dropdown) {
                dropdown.classList.remove("active");
            }
        });
    });

    // ================= Typewriter Effect =================
    const texts = ["DEVELOPER", "FOOTBALL COACH"];
    let speed = 100;
    const textElement = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (textElement) {
            if (charIndex < texts[textIndex].length) {
                textElement.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(eraseText, 1000);
            }
        }
    }

    function eraseText() {
        if (textElement) {
            if (textElement.innerHTML.length > 0) {
                textElement.innerHTML = textElement.innerHTML.slice(0, -1);
                setTimeout(eraseText, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                charIndex = 0;
                setTimeout(typeWriter, 500);
            }
        }
    }

    if (textElement) {
        typeWriter();
    }
});
