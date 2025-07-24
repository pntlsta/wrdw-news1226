document.addEventListener("mousemove", function(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const elements = [
        { selector: ".char-1", strength: 0.02, flip: -1 },
        { selector: ".char-2", strength: 0.03, flip: -1 },
        { selector: ".char-3", strength: 0.075, flip: 1 }
    ];

    elements.forEach(({ selector, strength, flip }) => {
        const el = document.querySelector(selector);
        if (el) {
            const x = offsetX * strength;
            const y = offsetY * strength;
            el.style.transform = `translate(${x}px, ${y}px) rotate(0deg) scaleX(${flip})`;
        }
    });

    const logo = document.querySelector(".logo-hero");
    if (logo) {
        const rotX = -(offsetY / centerY) * 15;
        const rotY = (offsetX / centerX) * 15;
        logo.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active'); // optional: remove if you only want to animate once
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

