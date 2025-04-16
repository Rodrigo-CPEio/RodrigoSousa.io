document.getElementById("theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
  
    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      document.getElementById("theme-toggle").textContent = "🌙";
    } else {
      root.setAttribute("data-theme", "dark");
      document.getElementById("theme-toggle").textContent = "☀️";
    }
  });