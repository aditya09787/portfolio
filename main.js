// Smooth reveal animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});    