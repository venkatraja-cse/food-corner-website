// Keep the footer year current.
document.getElementById("year").textContent = new Date().getFullYear();

// Close enough for a simple student project: smooth in-page navigation is handled by CSS.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
