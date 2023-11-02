document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const iconPlus = this.querySelector('.icon.plus');
    const iconMinus = this.querySelector('.icon.minus');
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    const content = this.nextElementSibling;

    buttons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      button.querySelector('.icon.plus').style.display = "inline";
      button.querySelector('.icon.minus').style.display = "none";
      button.nextElementSibling.style.maxHeight = null; 
    });

    if (!isExpanded) {
      this.setAttribute("aria-expanded", "true");
      iconPlus.style.display = "none";
      iconMinus.style.display = "inline";
      content.style.maxHeight = content.scrollHeight + "px"; 
    } else {
      content.style.maxHeight = null; 
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", toggleAccordion);
  });
});
