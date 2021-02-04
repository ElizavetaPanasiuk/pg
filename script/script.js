showSlides();
function showSlides(){
  const images = ['01.jpg', '02.jpg', '03.jpg'];
  const sliderContainer = document.querySelector('.slider');
  const slider = setInterval(changeImage, 2000);
  const imagesLength = images.length;
  let currentImage = 0;

  function changeImage(){
    currentImage = (currentImage + 1) % imagesLength;
    const src = images[currentImage];
    sliderContainer.style.backgroundImage =  `url(./../images/${src})`;
  }; 
}

