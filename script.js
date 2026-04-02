let images = [
  "images/iip.png",
  "images/12.jpg",
  "images/13.png",
  "images/14.png",
  "images/15.png",
  "images/16.jpg",
  "images/17.png",
  "images/18.png",
  "images/19.png",
  "images/20.png"
  
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
