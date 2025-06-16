// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

const hideDiv = document.getElementById('hideDiv');
const hideBtn = document.getElementById('hideBtn');
const toggleBtn = document.getElementById('toggleBtn');

const divToHide = document.getElementById('text');

hideDiv.addEventListener('click', function () {
  divToHide.classList.add('hidden');
});
hideBtn.addEventListener('click', function () {
  hideBtn.classList.add('hidden');
});
toggleBtn.addEventListener('click', function () {
  divToHide.classList.toggle('hidden');
  hideBtn.classList.toggle('hidden');
});
