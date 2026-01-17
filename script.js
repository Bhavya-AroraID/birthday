let musicPlaying = false;
const music = document.getElementById("bgMusic");

function blowCandle() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("smoke").style.display = "block";

  document.getElementById("instruction").innerText =
    "Wish accepted 💕 Now cut the cake 🎂";

  document.getElementById("cutBtn").style.display = "inline-block";

  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
  }
}

function toggleMusic() {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    document.getElementById("musicBtn").innerText = "🔇 Music";
  } else {
    music.play();
    musicPlaying = true;
    document.getElementById("musicBtn").innerText = "🔊 Music";
  }
}

function cutCake() {
  const cake = document.getElementById("cake");
  cake.classList.add("cut", "pulse");

  const message = document.getElementById("message");
  message.innerHTML =
    "My love ❤️<br><br>" +
    "Every moment with you feels like magic.<br>" +
    "You are my happiness, my peace,<br>" +
    "and my forever dream 💖<br><br>" +
    "Happy Birthday, my Rasmalaii 💕<br>" +
    "<b>I love you endlessly.</b>";

  message.classList.add("show");

  document.getElementById("cutBtn").style.display = "none";

  romanticHearts();
  floatingPhotos();
}

/* ULTRA-SLOW HEARTS */
function romanticHearts() {
  const hearts = ["❤️", "💖", "💗", "💕"];

  for (let i = 0; i < 40; i++) {
    const h = document.createElement("div");
    h.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.position = "fixed";
    h.style.fontSize = Math.random() * 18 + 22 + "px";
    h.style.left = Math.random() * 100 + "vw";
    h.style.opacity = 0.9;
    h.style.zIndex = 4;

    if (Math.random() > 0.5) {
      h.style.top = "-40px";
      h.style.animation = "heartSlowDown 14s linear forwards";
    } else {
      h.style.bottom = "-40px";
      h.style.animation = "heartSlowUp 16s linear forwards";
    }

    document.body.appendChild(h);
    setTimeout(() => h.remove(), 16000);
  }
}

/* FLOATING PHOTOS */
function floatingPhotos() {
  const photos = ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg"]; // add her photos

  photos.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.left = 10 + i * 30 + "vw";
    img.style.bottom = "-150px";
    img.style.animationDelay = i * 2 + "s";

    document.getElementById("photo-layer").appendChild(img);

    setTimeout(() => img.remove(), 20000);
  });
}
