const btn = document.getElementById("toggleDark");

/* LOAD DARK MODE */
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

/* TOGGLE DARK */
if (btn) {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark")
    );
  });
}

/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#")) {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});