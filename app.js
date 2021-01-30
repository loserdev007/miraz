const navElList = document.querySelector('.main');
const sectionsListEl = document.querySelectorAll('.sec');
navElList.addEventListener('click', navHandler);
let prev = 1;
let isClicked = false;
let isScrolling;

function navHandler(event) {
   isClicked = true;
   const perNav = document.querySelector('.main > li').clientHeight;
   const checkId = event.target.closest('.checkPoint').id;
   const perEl = document.querySelectorAll('.sec')[0].clientHeight;
   const span = document.querySelector('.nav span');
   if (true) {
      const perElList = document.querySelectorAll('.sec')[checkId - 1];
      perElList.scrollIntoView({
         behavior: 'smooth',
         block: 'center'
      });
      span.style.transform = `translateY(${perNav * (checkId - 1)}px)`;
      prev = checkId;
   }
}
window.onscroll = function () {
   window.clearTimeout(isScrolling);
   isScrolling = setTimeout(function () {
      isClicked = false;
   }, 100);
   if (isClicked) return;
   const perNav = document.querySelector('.main > li').clientHeight;
   const span = document.querySelector('.nav span');
   if (sectionsListEl[0].getBoundingClientRect().top <= 0 && sectionsListEl[0].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${perNav * 0}px)`;
      prev = 1;
   } else if (sectionsListEl[1].getBoundingClientRect().top <= 0 && sectionsListEl[1].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${perNav * 1}px)`;
      prev = 2;
   } else if (sectionsListEl[2].getBoundingClientRect().top <= 0 && sectionsListEl[2].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${perNav * 2}px)`;
      prev = 3;
   }
   // else if (sectionsListEl[3].getBoundingClientRect().top <= 0 && sectionsListEl[3].getBoundingClientRect().bottom >= 0) {
   //    span.style.transform = `translateY(${perNav * 3}px)`;
   //    prev = 4;
   // } else if (sectionsListEl[4].getBoundingClientRect().top <= 0 && sectionsListEl[4].getBoundingClientRect().bottom >= 0) {
   //    span.style.transform = `translateY(${perNav * 4}px)`;
   //    prev = 5;
   // }
}