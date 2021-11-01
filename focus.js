//Variable already created for images from galleries in unsplash.js (variable name = images)
const focus = document.querySelector('.focus');
const exit = document.querySelector('.slideshow .exit');
const rightArrow = document.querySelector('.slideshow .rightArrow');
const leftArrow = document.querySelector('.slideshow .leftArrow');
const focusPhoto = document.querySelector('.focusPhoto img');
const photographerImage = document.querySelector('.photographer img ')
const photographerName = document.querySelector('.photographer h1')
let index = -1;
let scrollheight=0;
let isFocusOn = false;


//Image Click Event
for(let image of images){
  image.addEventListener('click', function(){
      scrollheight= window.scrollY;
      focus.classList.remove('displayNone');
      focusPhoto.src= image.src;
      photographerImage.src = image.getAttribute('data-user-picture');
      photographerName.innerText = image.getAttribute('data-user-name').toUpperCase();
      document.querySelector('html').classList.add('noScrollbar');
      focus.classList.add('visibleScrollbar');
      index= images.indexOf(image);
      isFocusOn = true;
  })
}

//Prevent Scroll
window.addEventListener('scroll',function () {
  if (isFocusOn) {
    if (window.scrollY < scrollheight) {

      
      window.scrollTo({
        top: scrollheight,
        left: 0,
        behavior: 'instant'
      });
    }
    
    if (window.scrollY > (scrollheight+ focus.offsetHeight - window.innerHeight)) {

      
      window.scrollTo({
        top: scrollheight+ focus.offsetHeight - window.innerHeight,
        left: 0,
        behavior: 'instant'
      });
    }
  }
})

//Next Photo Function
const nextPhoto = function(){
  if (index === (images.length - 1)) {
    index=0;
  }
  else{
  index++;
}
  focusPhoto.src= images[index].src;
  photographerImage.src = images[index].getAttribute('data-user-picture');
  photographerName.innerText = images[index].getAttribute('data-user-name').toUpperCase();
}


//Previous Photo Function
const previousPhoto = function(){
  if (index === 0) {
    index= images.length-1;
  }
  else{
  index--;
}
  focusPhoto.src= images[index].src;
    photographerImage.src = images[index].getAttribute('data-user-picture');
  photographerName.innerText = images[index].getAttribute('data-user-name').toUpperCase();
}


//Next Photo
rightArrow.addEventListener('click', nextPhoto )

//Previous Photo
leftArrow.addEventListener('click', previousPhoto )

//Right Swipe and Left Swipe
window.onload = function() {
      //Left Swipe
  focus.addEventListener('swiped-left', nextPhoto)
     //Right Swipe
  focus.addEventListener('swiped-right', previousPhoto)
  }


//Image Exit Event
   exit.addEventListener('click' , function (){
    focus.classList.add('displayNone');   
    document.querySelector('html').classList.remove('noScrollbar');
   isFocusOn = false;
   });
