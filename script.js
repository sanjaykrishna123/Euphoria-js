let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}

const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: '1',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let likeButton = document.querySelectorAll('.likeButton')
likeButton.forEach((button)=> {
  button.addEventListener('click', ()=> {
    img = button.querySelector('img');
    if(img){
      img.src = img.src.includes('wishlist.svg') ? './assets/heart-solid.svg' : './assets/wishlist.svg';
      if(img.src.includes('heart-solid.svg')){
        img.classList.add('like-icon');
      }
      else{
        img.classList.remove('like-icon');
      }
    }
  })
})

const swiper2 = new Swiper('.feedbackContainer', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let extraDetails = document.getElementById('extraDetails');
extraDetails.addEventListener('click', ()=> {
  extraDetails.classList.toggle('active');
  let detailsContainer = document.querySelector('.extraDetails');
  detailsContainer.classList.toggle('active');
})

let extraDetails2 = document.getElementById('extraDetails2');
extraDetails2.addEventListener('click', ()=> {
  extraDetails.classList.toggle('active');
  let detailsContainer = document.querySelector('.extraDetails');
  detailsContainer.classList.toggle('active');
})

let navigationMenu = document.querySelector('.navigation-menu');
navigationMenu.addEventListener('click', ()=> {
  let responsiveContainer = document.querySelector('.responsiveContainer');
  responsiveContainer.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", ()=> {
  links = document.querySelectorAll('.itemContainer .nextPage');
  links.forEach((link)=> {
    link.addEventListener('click', function(e){
      e.preventDefault();

      let container = this.closest('.itemContainer');
      let img = container.querySelector('img');
      let src = img ? img.getAttribute('src'): null;
      let gender = container.dataset.gender;

      if(src){
        sessionStorage.setItem('imgSrc', src);
        sessionStorage.setItem('gender', gender);
        location.href = 'details.html';
      }
    })
  })
})