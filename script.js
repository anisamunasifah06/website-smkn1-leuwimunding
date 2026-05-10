


// ANIMASI CARD

const cards = document.querySelectorAll(
    ".card, .profil-box, .jurusan-card"
);

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "0.8s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 250);

});