
const packages = [
  {
    title: "Engine Bay Wash",
    price: "$50",
    description: [
      "Pre-wash",
      "Degrease",
      "Towel dry",
      "Shine"
    ],
    image: "engine-bay.jpg"
  },
  {
    title: "Interior Detail",
    price: "$120",
    description: [
      "Vacuum",
      "Interior wipe down",
      "Floor matts",
      "+$40 stain removal/deep cleaning of seats"
    ],    
    image: "interior.jpg"
  },
  {
    title: "Exterior Wash",
    price: "$80",
    description: [
      "Pre-wash",
      "Foam wash",
      "Contact wash",
      "Rinse",
      "Graphene wax",
      "+$40 Decontamination"
    ],    
    image: "soapy-red-car-black-rims.jpg"
  },
  {
    title: "Full Package",
    price: "$300",
    description: [
      "Engine bay wash",
      "Interior detailing",
      "Exterior wash"
    ],    
    image: "beamer.jpg"
  }
];

let currentIndex = 0;
const track = document.getElementById("carousel-track");

function renderCards() {
  track.innerHTML = "";

  packages.forEach((pkg) => {
    const card = document.createElement("div");
    card.classList.add("carousel-card");

    card.innerHTML = `
      <h3 class="card-title">${pkg.title}</h3>
      <div class="card-body">
        <img src="../assets/img/${pkg.image}" alt="${pkg.title}" />
        <div class="card-info">
          <ul class="description-list">
            ${pkg.description.map(point => `<li>${point}</li>`).join("")}
          </ul>
        <p class="price"><span class="price-title">Price:</span>${pkg.price}</p>
        </div>
      </div>
    `;

    track.appendChild(card);
  })
  updateSlide();
}

function updateSlide() {
  const offset = currentIndex * 100;
  track.style.transform = `translateX(-${offset}%)`;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
}

function nextSlide() {
  const maxIndex = packages.length - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlide();
  }
}

renderCards();
