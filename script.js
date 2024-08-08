const destinationItems = document.querySelectorAll('.destination-list li');
const destinationImage = document.getElementById('destinationImage');
const pathText = document.querySelector('.path span');

const originalImage = destinationImage.getAttribute('src');
const originalText = pathText.textContent;
const originalActiveItem = document.querySelector('.destination-list li.active');

destinationItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const imageName = item.getAttribute('data-image');
        const text = item.getAttribute('data-text');
        destinationImage.setAttribute('src', imageName);
        pathText.textContent = text;

        destinationItems.forEach(li => {
            li.classList.remove('active');
            li.classList.add('inactive');
        });

        item.classList.add('active');
        item.classList.remove('inactive');
    });

    item.addEventListener('mouseout', () => {
        
        destinationImage.setAttribute('src', originalImage);
        pathText.textContent = originalText;

        destinationItems.forEach(li => {
            li.classList.remove('active');
            li.classList.add('inactive');
        });
        originalActiveItem.classList.add('active');
        originalActiveItem.classList.remove('inactive');
    });
});

const slides = document.querySelector('.slides');
const slideArray = Array.from(document.querySelectorAll('.slide1'));

function nextSlide() {
    const firstSlide = slideArray.shift();
    slideArray.push(firstSlide);
    updateSlides();
}

function prevSlide() {
    const lastSlide = slideArray.pop();
    slideArray.unshift(lastSlide);
    updateSlides();
}

function updateSlides() {
    slides.innerHTML = '';
    slideArray.forEach(slide => {
        slides.appendChild(slide);
    });
}

// Initialize the slider
updateSlides();


const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        320:{
            slidesPerView: 2
        },
        620:{
            slidesPerView: 3
        },
        920:{
            slidesPerView: 4
        },
    }

  });