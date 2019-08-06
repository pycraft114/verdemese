
    const nav = document.querySelector('.nav');
    const mainLists = document.querySelectorAll('.main__list');
    const dropdownBackground = document.querySelector('.dropdown__background');

    function enterIntoList() {
      // 이곳에서 this는 item을 가르킴.
      // arrow function을 통해서 this가 item을 지칭하도록 함.
      this.classList.add('active');
      setTimeout(() => {
        if (this.classList.contains('active')) {
        this.classList.add('opacity__active')
      }
    }, 150);
      dropdownBackground.classList.add('open');

      const dropdown = this.querySelector('.dropdown');
      const locationOfDropdown = dropdown.getBoundingClientRect();
      const locationOfNav = nav.getBoundingClientRect();
      const dropdownRect = {
        width: locationOfDropdown.width,
        height: locationOfDropdown.height,
        top: locationOfDropdown.top - locationOfNav.top,
        left: locationOfDropdown.left
      };

      dropdownBackground.style.width = `${dropdownRect.width}px`;
      dropdownBackground.style.height = `${dropdownRect.height}px`;
      dropdownBackground.style.transform = `translate(${dropdownRect.left}px, ${dropdownRect.top}px)`;      

    }
    
    function leaveFromList() {
      this.classList.remove('active');
      setTimeout(() => this.classList.remove('opacity__active'), 100);
      dropdownBackground.classList.remove('open');
    }

    mainLists.forEach(item => item.addEventListener('mouseenter', enterIntoList));
    mainLists.forEach(item => item.addEventListener('mouseleave', leaveFromList));
    
