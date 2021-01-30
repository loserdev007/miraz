const listEl = document.querySelector('.main');
const sectionsEl = document.querySelectorAll('.sec');
listEl.addEventListener('click', listHandler);
const nperEl = document.querySelectorAll('.main > li')[0].clientHeight;
document.querySelector('.nav span').style.height = `${nperEl}px`;
let prev = 1;

function listHandler(event) {
   const checkId = event.target.closest('.checkPoint').id;
   const perEl = document.querySelectorAll('.sec')[0].clientHeight;
   console.log(nperEl);
   const span = document.querySelector('.nav span');
   if (checkId != prev) {
      sectionsEl.forEach((el) => {
         el.style.transform = `translateY(-${perEl * (checkId - 1)}px)`;
      })
      span.style.transform = `translateY(${nperEl * (checkId - 1)}px)`;
      console.log(nperEl * (checkId - 1));
      prev = checkId;
   }
}