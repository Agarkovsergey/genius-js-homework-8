// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>
let output = document.getElementById('output');

const widget = document.querySelector('[data-widget-name]');

const p = document.createElement('p');
p.textContent = widget.getAttribute('data-widget-name');
output.appendChild(p);
