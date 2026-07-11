const text = "Distance means nothing when someone means everything. ❤️";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

window.onload = typeWriter;

function showLove() {

    document.getElementById("letter").style.display = "block";

    document.getElementById("bgMusic").play();

    setInterval(createHeart, 250);

}

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 40) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}
cconst startDate = new Date("2025-05-06T00:00:00");

function updateLoveCounter() {

    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("loveCounter").innerHTML =
            "❤️ Our journey begins on 6 May 2026 ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));

    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("loveCounter").innerHTML = `
        ❤️ ${days} Days<br>
        🕒 ${hours} Hours<br>
        ⏰ ${minutes} Minutes<br>
        💖 ${seconds} Seconds
    `;
}

updateLoveCounter();
setInterval(updateLoveCounter, 1000);
