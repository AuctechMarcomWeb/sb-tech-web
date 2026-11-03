

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("hamburgerBtn");

  menu?.classList.toggle("open");
  btn?.classList.toggle("active");
}

function closeMenu() {
  document.getElementById("mobileMenu")?.classList.remove("open");
  document.getElementById("hamburgerBtn")?.classList.remove("active");
}

document.addEventListener("click", function(e) {
  const menu = document.getElementById("mobileMenu");
  const btn = document.getElementById("hamburgerBtn");

  if (!menu || !btn) return;

  const clickedInsideMenu = menu.contains(e.target);
  const clickedButton = btn.contains(e.target);

  if (!clickedInsideMenu && !clickedButton) {
    closeMenu();
  }
});




function applyActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".sb-nav-links a, .sb-mobile-menu a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 40);
});

