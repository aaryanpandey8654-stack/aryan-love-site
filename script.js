// ⭐ STAR BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(drawStars);
}
drawStars();

// 🎵 ENTER BUTTON
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

enterBtn.onclick = function() {
    intro.style.display = "none";
    main.classList.remove("hidden");
    typeWriter();
    startSlideshow();
};

// ⌨ TYPEWRITER
const text = "Nidhi... 💖 Tum meri life ka sabse beautiful part ho. – Aryan ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

// 📜 SLIDESHOW
const images = ["poem1.png", "poem2.jpg"];
let index = 0;

function startSlideshow() {
    setInterval(function() {
        index = (index + 1) % images.length;
        const slide = document.getElementById("slide");

        slide.style.opacity = 0;

        setTimeout(function() {
            slide.src = images[index];
            slide.style.opacity = 1;
        }, 800);

    }, 5000);
}

// 💍 PROPOSAL
document.getElementById("proposalBtn").onclick = function() {
    document.getElementById("proposal").classList.remove("hidden");
};

// 😈 NO BUTTON RUN
const noBtn = document.getElementById("noBtn");

noBtn.onmouseover = function() {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
};

// 🎉 YES BUTTON
document.getElementById("yesBtn").onclick = function() {

    confetti({
        particleCount: 300,
        spread: 120
    });

    document.body.innerHTML = `
        <h1 style="margin-top:35vh; font-size:50px; color:#ff4d6d;">
        Aryan ❤️ Nidhi Forever 💍
        </h1>
        <h2>You are my favorite person. Always. 💖</h2>
    `;
};
