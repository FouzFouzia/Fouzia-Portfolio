const progressBars = document.querySelectorAll(".progress");

const animateProgress = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const targetWidth = progress.getAttribute("data-progress");
      progress.style.width = targetWidth + "%";
    } else {
      const progress = entry.target;
      progress.style.width = "0%";
    }
  });
};

const observer = new IntersectionObserver(animateProgress, {
  threshold: 0.5,
});

progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});

var typed = new Typed("#element", {
  strings: ["Java Developer", "Spring Boot Learner", "Software Development Enthusiast"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  showCursor: false,
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
