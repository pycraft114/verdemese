const inputs = document.querySelectorAll('input');

function changingInputValue(event) {
  if(this === event.target && this.dataset.px){
    document.documentElement.style.setProperty(`--${this.name}`, this.value + 'px')
  } else {
      document.documentElement.style.setProperty(`--${this.name}`, this.value)
  }
}

inputs.forEach(input => input.addEventListener('input', whenBarMoving));
