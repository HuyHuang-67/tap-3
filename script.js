let images = [
  "images/iiii.png",
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9a.jpg",
  "images/9.png",
  "images/oo.jpg",
  "images/11.png"
  
];

const container = document.getElementById("comic-container");

function renderImages() {
  container.innerHTML = "";

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "comic-img";

    // ❌ bỏ dòng này
    // img.draggable = true;

    container.appendChild(img);
  });
}

renderImages();
