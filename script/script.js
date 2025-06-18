// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

const hideDiv = document.getElementById('hideDiv');
const hideBtn = document.getElementById('hideBtn');
const divToHide = document.getElementById('text');
const tree = document.querySelector('.tree');

hideDiv.addEventListener('click', function () {
  divToHide.classList.add('hidden');
});
hideBtn.addEventListener('click', function () {
  hideBtn.classList.add('hidden');
});

// document.querySelectorAll('.tree > li > span').forEach(span => {
//   span.addEventListener('click', () => {
//     const parentLi = span.parentElement;
//     const internalList = parentLi.querySelector('ul');
//     if (internalList) {
//       internalList.style.display = internalList.style.display === 'block' ? 'none' : 'block';
//     }
//   });
// });
document.querySelector('.tree').addEventListener('click', function (event) {
  if (event.target.tagName === 'SPAN') {
    const li = event.target.parentElement;
    const internalList = li.querySelector('ul');
    if (internalList) {
      if (internalList.style.display === 'block') {
        internalList.style.display = 'none';
      } else {
        internalList.style.display = 'block';
      }
    }
  }
});
