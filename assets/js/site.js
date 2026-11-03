document.querySelectorAll("[data-print-resume]").forEach((button) => {
  button.hidden = false;
  button.addEventListener("click", () => window.print());
});
