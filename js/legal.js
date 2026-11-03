const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: .1 });
revealEls.forEach(el => revealObserver.observe(el));
