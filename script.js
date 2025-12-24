/* Card Open */
let opened = false;
function openCard() {
    const card = document.getElementById("cardInner");
    opened = !opened;
    card.style.transform = opened ? "rotateY(180deg)" : "rotateY(0deg)";
}

/* Music */
const music = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        music.volume = 0;
        music.play();
        let v = 0;
        const fade = setInterval(() => {
            if (v < 0.5) {
                v += 0.02;
                music.volume = v;
            } else clearInterval(fade);
        }, 100);
        isPlaying = true;
    } else {
        music.pause();
        isPlaying = false;
    }
}

/* Snow */
function snow() {
    const s = document.createElement("div");
    s.className = "snowflake";
    s.innerHTML = "❄️";
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = (Math.random() * 3 + 5) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 8000);
}
setInterval(snow, 350);

/* Sparkles on Touch */
document.addEventListener("touchstart", e => {
    const spark = document.createElement("span");
    spark.innerHTML = "✨";
    spark.style.position = "absolute";
    spark.style.left = e.touches[0].pageX + "px";
    spark.style.top = e.touches[0].pageY + "px";
    spark.style.animation = "spark 1s forwards";
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
});
