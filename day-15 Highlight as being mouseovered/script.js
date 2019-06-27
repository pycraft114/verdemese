const highlight = document.createElement('span');
const trigger = document.querySelectorAll('a');
document.body.appendChild(highlight);
highlight.classList.add('highlight');

function activeHighlight() {
  const triggerLocationAndSize = this.getBoundingClientRect();
  highlight.style.width = `${triggerLocationAndSize.width}px`
  highlight.style.height = `${triggerLocationAndSize.height}px`
  highlight.style.transform = `translate(${triggerLocationAndSize.left}px, ${triggerLocationAndSize.top + window.scrollY}px)`

  console.log(triggerLocationAndSize);
}

trigger.forEach(a => a.addEventListener('mouseenter', activeHighlight))
