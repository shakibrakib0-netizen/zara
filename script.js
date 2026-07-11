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
