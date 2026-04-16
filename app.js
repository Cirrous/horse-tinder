// Unsere Datenbank der heiratswilligen Huftiere
const horses = [
  {
    name: "Fury der beste",
    age: 8,
    desc: "Liebt Äpfel, hasst Montage.",
    img: "https://loremflickr.com/300/200/cat",
  },
  {
    name: "Pummelchen",
    age: 12,
    desc: "Spezialist für das Umwerfen von Zaunpfosten.",
    img: "https://loremflickr.com/300/200/pony",
  },
  {
    name: "Pegasus",
    age: 3000,
    desc: "Etwas abgehoben, sucht Bodenständige.",
    img: "https://loremflickr.com/300/200/horse,white,pegasus",
  },
  {
    name: "Salami",
    age: 8,
    desc: "Der Name ist ein schlechter Scherz vom Vorbesitzer.",
    img: "https://loremflickr.com/300/200/donkey",
  },
];

let currentIndex = 0;

function updateCard() {
  const horse = horses[currentIndex];
  document.getElementById("horse-name").innerText = horse.name;
  document.getElementById("horse-desc").innerText =
    `${horse.age} Jahre, ${horse.desc}`;
  document.getElementById("horse-img").src = horse.img;
}

function swipe(richtung) {
  if (richtung === "rechts") {
    alert(`Match! ${horses[currentIndex].name} wiehert vor Freude!`);
  }

  currentIndex = (currentIndex + 1) % horses.length;
  updateCard();
}
