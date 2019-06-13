const panels = Array.from(document.querySelectorAll('.panel'));

function toggleActiveClass (event) {
  this.classList.toggle('active');
}

function toggleTransitionedclass (event) {
  if (event.propertyName === 'flex-grow') {
    this.classList.toggle('transitionend');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleActiveClass));
panels.forEach(panel => panel.addEventListener('transitionend', toggleTransitionedclass))

//클래스를 추가(add), 제거(remove)를 제외하고 toggle을 통해서 class를 간편하게 추가하거나 제거할 수 있는 방법을 찾음.
