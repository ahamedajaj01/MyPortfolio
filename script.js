document.addEventListener("DOMContentLoaded", async () => {
      const menuButton = document.querySelector(".nav-toggle");
      const menuContent = document.querySelector(".nav-content");
      const mainContent = document.querySelector(".hero-content");

      if (menuButton && menuContent) {
        menuButton.addEventListener("click", () => {
          menuContent.classList.toggle("active");
          if (mainContent) {
            mainContent.style.marginTop = menuContent.classList.contains("active") ? "150px" : "0";
          }
        });
      }
      // Get the current year and set it in the footer
      const yearSpan = document.getElementById("year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
});
