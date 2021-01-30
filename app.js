const listEl = document.querySelector('.main');
const sectionsEl = document.querySelectorAll('.sec');
listEl.addEventListener('click', listHandler);
const nperEl = document.querySelector('.main > li').clientHeight;
document.querySelector('.nav span').style.height = `${nperEl}px`;
let prev = 1;
const allSec = document.querySelectorAll('.sec');
console.log(allSec[0].getBoundingClientRect().top);
function listHandler(event) {
   const checkId = event.target.closest('.checkPoint').id;
   const perEl = document.querySelectorAll('.sec')[0].clientHeight;
   const span = document.querySelector('.nav span');
   if (true) {
      const perElList = document.querySelectorAll('.sec')[checkId - 1];
      perElList.scrollIntoView({
         behavior: 'smooth',
         block: 'center'
      });
      span.style.transform = `translateY(${nperEl * (checkId - 1)}px)`;
      console.log(nperEl * (checkId - 1));
      prev = checkId;
   }
}
window.onscroll = function () {
   const span = document.querySelector('.nav span');
   if (allSec[0].getBoundingClientRect().top <= 0 && allSec[0].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${nperEl * 0}px)`;
      prev = 1;
   }
   else if (allSec[1].getBoundingClientRect().top <= 0 && allSec[1].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${nperEl * 1}px)`;
      prev = 2;
   }
   else if (allSec[2].getBoundingClientRect().top <= 0 && allSec[2].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${nperEl * 2}px)`;
      prev = 3;
   }
   else if (allSec[3].getBoundingClientRect().top <= 0 && allSec[3].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${nperEl * 3}px)`;
      prev = 4;
   }
   else if (allSec[4].getBoundingClientRect().top <= 0 && allSec[4].getBoundingClientRect().bottom >= 0) {
      span.style.transform = `translateY(${nperEl * 4}px)`;
      prev = 5;
   }
}