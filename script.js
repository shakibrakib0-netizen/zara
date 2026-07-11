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

// ===============================
// ❤️ Open Letter
// ===============================

let started = false;

function showLove() {

    document.getElementById("letter").style.display = "block";

    const music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(() => {
            console.log("Music autoplay blocked.");
        });
    }

    if (!started) {
        started = true;
        setInterval(createHeart, 250);
    }

    window.scrollTo({
        top: document.getElementById("letter").offsetTop,
        behavior: "smooth"
    });
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
// ❤️ Reasons
// ===============================

const reasons = [

"I love your beautiful smile ❤️",
"I love your cute voice ❤️",
"I love your kindness ❤️",
"I love your eyes ❤️",
"I love your heart ❤️",
"I love how you care about me ❤️",
"I love how you support me ❤️",
"I love your laugh ❤️",
"I love talking to you ❤️",
"I love your personality ❤️",
"I love your honesty ❤️",
"I love your loyalty ❤️",
"I love your hugs (one day ❤️)",
"I love your dreams ❤️",
"I love your confidence ❤️",
"I love your patience ❤️",
"I love your cute anger ❤️",
"I love your messages ❤️",
"I love waking up thinking about you ❤️",
"I love sleeping after talking to you ❤️",
"You make me smile ❤️",
"You make me feel safe ❤️",
"You inspire me ❤️",
"You understand me ❤️",
"You believe in me ❤️",
"You make every day better ❤️",
"You are my best friend ❤️",
"You are my favorite person ❤️",
"You are my peace ❤️",
"You are my home ❤️"

];

// Fill to 100 automatically
while (reasons.length < 100) {
    reasons.push("Because you are simply amazing ❤️");
}

let currentReason = -1;

function nextReason() {

    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = 0;
    }

    document.getElementById("reasonBox").innerHTML =
        reasons[currentReason];
}

// ===============================
// ❤️ Start Page
// ===============================

window.onload = function () {

    typeWriter();

    updateLoveCounter();

    setInterval(updateLoveCounter, 1000);

};
