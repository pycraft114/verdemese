    const pictures = document.querySelectorAll('.slide-in');

    function animatePicture(event) {
      pictures.forEach(picture => {
        const windowBottom = (window.scrollY + window.innerHeight);
        const halfOnPicture = picture.offsetTop + (picture.offsetHeight / 2);
        const pictureBottom = (picture.offsetTop + picture.offsetHeight);
        if(windowBottom >= halfOnPicture && pictureBottom >= scrollY){
          picture.classList.add('active');
        } else {
          picture.classList.remove('active');
        }
      })
    }

    window.addEventListener('scroll', animatePicture);
