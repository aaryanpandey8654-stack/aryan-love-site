// ⭐ STAR BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 250; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(drawStars);
}
drawStars();

// ENTER BUTTON
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

enterBtn.onclick = function() {
    intro.style.display = "none";
    main.classList.remove("hidden");
    typeWriter();
    startSlideshow();
};

// TYPEWRITER
const text = "Nidhi... 💖 You are the most beautiful chapter of my life. – Aryan ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

// SLIDESHOW
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

    }, 4000);
}

// PROPOSAL SHOW
document.getElementById("proposalBtn").onclick = function() {
    document.getElementById("proposal").classList.remove("hidden");
};

// FINAL LOVE MESSAGE
function showLoveMessage() {

    confetti({
        particleCount: 350,
        spread: 140
    });

    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background: radial-gradient(circle, #1a001f, #000);
            color:white;
            text-align:center;
            padding:20px;
        ">
            <h1 style="font-size:55px; color:#ff4d6d; text-shadow:0 0 25px #ff4d6d;">
                Aryan ❤️ Nidhi Forever 💍
            </h1>

            <h2 style="margin-top:25px; max-width:650px; line-height:1.6;">
                From today, tomorrow, and every lifetime after this…  
                I choose you.  
                You are my happiness, my peace, my forever home. 💖
            </h2>

            <h3 style="margin-top:20px;">
                And I promise…  
                I will love you more with every heartbeat. ✨
            </h3>
        </div>
    `;
}

document.getElementById("yesBtn").onclick = showLoveMessage;
document.getElementById("noBtn").onclick = showLoveMessage;
