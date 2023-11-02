// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');
  
//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute('aria-expanded', 'false');
//   }
  
//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//   }
// }

// items.forEach(item => item.addEventListener('click', toggleAccordion));

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  const arrowIcon = this.querySelector('.icon');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
    items[i].querySelector('.icon').classList.remove('active');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    arrowIcon.classList.add('active');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
