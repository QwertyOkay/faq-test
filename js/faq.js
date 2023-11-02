//  document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".accordion button");

//   function toggleAccordion() {
    
//     const iconPlus = this.querySelector('.icon.plus');
//     const iconMinus = this.querySelector('.icon.minus');
//     const isExpanded = this.getAttribute("aria-expanded") === "true";

//     if (isExpanded) {
//       this.setAttribute("aria-expanded", "false");
//       iconPlus.style.display = "inline"; 
//       iconMinus.style.display = "none"; 
//     } else {
//       this.setAttribute("aria-expanded", "true");
//       iconPlus.style.display = "none"; 
//       iconMinus.style.display = "inline"; 
//     }
//   }

//   buttons.forEach((button) => {
//     button.addEventListener("click", toggleAccordion);
//   });
// });

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

