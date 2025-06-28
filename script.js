const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "light";
  const newTheme = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerText = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerText = "Read Less";
  }
}
