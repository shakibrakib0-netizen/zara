// ===============================
// ❤️ Typewriter Effect
// ===============================

const text = "Distance means nothing when someone means everything. ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

window.onload = function () {
    typeWriter();
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
};

// ===============================
// ❤️ Open Heart Button
// ===============================

let started = false;

function showLove() {

    document.getElementById("letter").style.display = "block";

    // Play music
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(() => {
            console.log("Music will play after user interaction.");
        });
    }

    // Start hearts only once
    if (!started) {
        started = true;
        setInterval(createHeart, 250);
    }
}

// ===============================
// ❤️ Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// ===============================
// ❤️ Love Counter
// ===============================

const startDate = new Date("2025-05-06T00:00:00");

function updateLoveCounter() {

    const counter = document.getElementById("loveCounter");

    if (!counter) return;

    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        counter.innerHTML =
            "❤️ Our journey begins on <br><strong>6 May 2025</strong>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    counter.innerHTML = `
        ❤️ <strong>${days}</strong> Days<br>
        🕒 <strong>${hours}</strong> Hours<br>
        ⏰ <strong>${minutes}</strong> Minutes<br>
        💖 <strong>${seconds}</strong> Seconds
    `;
}
