const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Smart Guy",
    img: "./media/man1.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum nisl vel blandit dapibus. Duis eu turpis id elit convallis dictum. Donec malesuada risus nulla, sed tristique nulla elementum in.",
  },
  {
    id: 2,
    name: "Jane Boe",
    title: "UX Designer",
    img: "./media/woman1.jpg",
    info: "fide cure appeal rin sakura aiming mda finalists evaluation reducing novak composites trucos ticks goog foolishly meticulously lh booksellers alibaba deviation monsoon aztecs suspicious ashrae bursts tenants ests chrome adopt ing soiled bellaire cardiac feist bullard diminish chivalry convocation kitchens heater ellesmere tone administrivia amaya discoveries ethnically caliente kickin",
  },
  {
    id: 3,
    name: "Max Verstappen",
    title: "Fast Guy",
    img: "./media/maxverstappen.jpg",
    info: "The son of former F1 driver Jos Verstappen and Belgian kart champion Sophie Kumpen, Max was always destined to race and from the moment Max first took the wheel of a go-kart, aged four, it was clear that the only route he was interested in was the quickest way to the top.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const jobTitle = document.getElementById("job-title");
const reviewText = document.getElementById("review-text");

const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let currentId = 1;
window.addEventListener("DOMContentLoaded", () => {
  updateReview();
});

function updateReview() {
  const item = reviews[currentId - 1];
  img.src = item.img;
  author.textContent = item.name;
  jobTitle.textContent = item.title;
  reviewText.textContent = item.info;
}

prevBtn.addEventListener("click", () => {
  if (currentId === 1) {
    return;
  }
  currentId--;
  updateReview();
});

nextBtn.addEventListener("click", () => {
  if (currentId === reviews.length) {
    return;
  }
  currentId++;
  updateReview();
});
