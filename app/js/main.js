"use strict"

const isMobile = {
     Android: function () {
          return navigator.userAgent.match(/Android/i);
     },
     BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
     },
     IOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
     },
     Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
     },
     Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
     },
     any:function(){
          return(
               isMobile.Android() ||
               isMobile.BlackBerry() ||
               isMobile.IOS() ||
               isMobile.Opera() ||
               isMobile.Windows());    
     }
};

if (isMobile.any()) {
     document.body.classList.add('_touch');

     let menuArrows = document.querySelectorAll('.menu__arrow');
     if (menuArrows.length > 0){
          for (let index = 0; index < menuArrows.length; index++) {
               const menuArrow = menuArrows[index];
               menuArrow.addEventListener("click", function (e){
                    menuArrow.parentElement.classList.toggle('_active');
               });
          }
     }
}
     else{
     document.body.classList.add('_pc');
}



// menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
     
     iconMenu.addEventListener("click", function (e) {
          document.body.classList.toggle('_lock');
          iconMenu.classList.toggle('_active');
          menuBody.classList.toggle('_active');
     });
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
     anchor.addEventListener('click', function (e) {
          e.preventDefault()

          const blockID = anchor.getAttribute('href').substr(1)

          document.getElementById(blockID).scrollIntoView({
               behavior: 'smooth',
               block: 'start'
          })
          document.body.classList.remove('_lock');
          iconMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
     })
}
