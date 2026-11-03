function initFooter() {
  const year = document.getElementById("copyrightYear");
  if (year) year.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFooter);
} else {
  initFooter();
}
