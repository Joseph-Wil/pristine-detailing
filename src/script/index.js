const imageData = {
  engine: [
    "engine1.jpg", "engine2.jpg", "engine3.jpg", "engine4.jpg", "engine5.jpg"
  ],
  interior: [
    "interior1.jpg", "interior2.jpg", "interior3.jpg", "interior4.jpg"
  ],
  exterior: [
    "exterior1.jpg", "exterior2.jpg", "exterior3.jpg", "exterior4.jpg"
  ],
  full: [
    "full1.jpg", "full2.jpg", "full3.jpg", "full4.jpg", "full5.jpg"
  ]
};

let currentCategory = 'engine';
let currentIndex = 0;

const track = document.getElementById("carousel-track");

function renderImages(category) {
  track.innerHTML = "";
  imageData[category].forEach((img) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");

    const image = document.createElement("img");
    image.src = `./assets/${img}`; // update path as needed
    image.alt = category;

    div.appendChild(image);
    track.appendChild(div);
  });

  currentIndex = 0;
  updateSlide();
}

function changeCategory(category) {
  currentCategory = category;
  renderImages(currentCategory);
}

function updateSlide() {
  const offset = currentIndex * (100 / 3);
  track.style.transform = `translateX(-${offset}%)`;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
}

function nextSlide() {
  const maxIndex = imageData[currentCategory].length - 3;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlide();
  }
}

// Initialize with default category
renderImages(currentCategory);
