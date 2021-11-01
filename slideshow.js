//Setting Up Slides
const slides = Array.from(document.querySelectorAll('.Welcome'));
for (const slide of slides) {
  let currentSlide = slides.indexOf(slide)

  //Adding Transition 
  slide.style.transition = 'all 1s ease-in-out' ;

   //Applying Background
   slide.style.background = `url(${cities[currentSlide].src}) `;
   slide.style.backgroundSize = '100% 100%'

   //Adding Letter
   let currentCity = cities[currentSlide].name;
   let capitalLetter = document.querySelectorAll('.letter')[currentSlide];
   capitalLetter.innerText = currentCity[0];
   capitalLetter.style.background = `url(${cities[currentSlide].src})`;
   capitalLetter.style.backgroundSize = '100% 100%'
   capitalLetter.style.webkitBackgroundClip = 'text';

   //Adding City Name
   for (const letter of currentCity) {
   const newLetter = document.createElement('p');
    newLetter.innerText = letter;
    slide.children[0].children[0].appendChild(newLetter);
  }
  
}


//Change in Slide
//Created a variable indexCity in unsplash.js
let dots = Array.from(document.querySelectorAll('.carousel-dots'))
const nextCity = document.querySelector('.cities .rightArrow');
const prevCity = document.querySelector('.cities .leftArrow');

let nextCitySlide = function () {
  prevCity.style.display='block';
  if (indexCity + 1 == slides.length - 1) {
    nextCity.style.display='none';
  }
   if (indexCity == slides.length-1) {
      
  }else{
   slides[indexCity].style.left = '-100%';
   slides[indexCity].style.right = '100%';
   dots[indexCity].style.background = "transparent";
   slides[++indexCity].style.left= '0%';
   slides[indexCity].style.right= '0%';}
   dots[indexCity].style.background = "white";
   dots[indexCity].style.webkitBackgroundClip = 'content-box';
   putImages();
  }

  



let prevCitySlide = function () {
  nextCity.style.display='block';
  if (indexCity - 1 == 0) {
    prevCity.style.display='none';
  }
  if (indexCity == 0) {

  }else{
   slides[indexCity].style.left = '100%';
   slides[indexCity].style.right = '-100%';
   dots[indexCity].style.background = "transparent";
   slides[--indexCity].style.left= '0%';
   slides[indexCity].style.right= '0%';}
   dots[indexCity].style.background = "white";
   dots[indexCity].style.webkitBackgroundClip = 'content-box';
   putImages();
 }


//Next City Button
nextCity.addEventListener('click', nextCitySlide)

//Previous City Button
prevCity.addEventListener('click', prevCitySlide)

//Right Swipe and Left Swipe
window.onload = function() {
for (const slide of slides) {
    //Left Swipe
slide.addEventListener('swiped-left', nextCitySlide)
   //Right Swipe
slide.addEventListener('swiped-right', prevCitySlide)
}
}
  


//Carasoule Buttons
for (const dot of dots) {
  dot.addEventListener('click', function () {
    let dotClicked = dots.indexOf(dot);
    let difference = dotClicked-indexCity;
    if (difference<0) {
   
      for (let i = 0; i > difference ; i--) {
        prevCitySlide();
      }
    }
    if (difference>0) {
   
      for (let i = 0; i < difference ; i++) {
        nextCitySlide();
      }
    }

  })
}





