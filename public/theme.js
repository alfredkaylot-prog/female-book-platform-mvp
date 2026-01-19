(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    root.setAttribute("data-theme", storedTheme);
  }

  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");

    const applyTheme = (theme) => {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      btn.textContent = theme === "dark" ? "🌞" : "🌙";
    };

    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
    });

    // set correct icon on first load
    applyTheme(root.getAttribute("data-theme") || "light");
  });
})();
