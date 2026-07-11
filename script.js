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
// ❤️ Love Journey Counter
// ===============================

// Year, Month (0=Jan, 4=May), Day
const startDate = new Date(2026, 4, 6, 0, 0, 0);

function updateLoveCounter() {

    const counter = document.getElementById("loveCounter");
    if (!counter) return;

    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) {
        counter.innerHTML = `
            ❤️ Our journey begins on <br>
            <strong>6 May 2026</strong>
        `;
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
            console.log("Autoplay blocked until user interaction.");
        });
    }

    if (!started) {
        started = true;
        setInterval(createHeart, 250);
    }

    document.getElementById("letter").scrollIntoView({
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
// ❤️ 100 Reasons
// ===============================

const reasons = [
"I love your smile ❤️",
"I love your beautiful eyes ❤️",
"I love your laugh ❤️",
"I love your kindness ❤️",
"I love your caring heart ❤️",
"I love your honesty ❤️",
"I love your loyalty ❤️",
"I love your voice ❤️",
"I love your cute messages ❤️",
"I love how you understand me ❤️",
"I love how you support me ❤️",
"I love how you believe in me ❤️",
"I love how you make me smile ❤️",
"I love your patience ❤️",
"I love your sweetness ❤️",
"I love your personality ❤️",
"I love your intelligence ❤️",
"I love your confidence ❤️",
"I love your dreams ❤️",
"I love your hugs (one day ❤️)",
"I love thinking about you ❤️",
"I love talking to you ❤️",
"I love spending time with you ❤️",
"I love every memory we make ❤️",
"I love your beautiful soul ❤️",
"I love how special you make me feel ❤️",
"I love your beautiful heart ❤️",
"I love the way you care ❤️",
"I love your smile every day ❤️",
"I love you more than words can say ❤️"
];

// Fill up to 100 reasons
while (reasons.length < 100) {
    reasons.push("Because you're the most amazing person in my life ❤️");
}

let currentReason = -1;

function nextReason() {

    currentReason++;

    if (currentReason >= reasons.length) {
        currentReason = 0;
    }

    document.getElementById("reasonBox").innerHTML = reasons[currentReason];
}

// ===============================
// ❤️ Page Load
// ===============================

window.onload = function () {

    typeWriter();

    updateLoveCounter();

    setInterval(updateLoveCounter, 1000);

};
