const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const close = document.querySelector(".close");
const images = document.querySelectorAll(".gallery img");

let index = 0;

// hap foton
images.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    openModal();
  });
});

function openModal() {
  modal.style.display = "flex";
  showImage(index);
}

function showImage(i) {
  modalImg.src = images[i].src;
  caption.textContent = images[i].alt;
}

function closeModal() {
  modal.style.display = "none";
}

close.addEventListener("click", closeModal);

prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage(index);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }
  if (e.key === "ArrowRight") {
    index = (index + 1) % images.length;
    showImage(index);
  }
});
