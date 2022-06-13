const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

function carousel() {
  // if statement to remove or add the btn
  if (count < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }

  if (count === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}

prevBtn.style.display = "none";

// nextBTN
nextBtn.addEventListener("click", function () {
  count++;
  carousel();
});

// prevBtn

prevBtn.addEventListener("click", function () {
  count--;
  carousel();
});
