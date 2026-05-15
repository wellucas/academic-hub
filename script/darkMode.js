function toggleTheme() {
    const themeButton = document.querySelector("#themeToggle");
    const bodyElement = document.querySelector("body");

    bodyElement.classList.toggle("dark-mode");

    if (bodyElement.classList.contains("dark-mode")) {
      themeButton.textContent = "Modo Escuro";
    } else {
       themeButton.textContent = "Modo Claro";
    }
}