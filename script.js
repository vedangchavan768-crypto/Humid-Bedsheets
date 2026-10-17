const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

if (burger && menu) {
  burger.addEventListener('click', function () {
    menu.classList.toggle('open');
  });
}

document.querySelectorAll('.menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    if (menu) menu.classList.remove('open');
  });
});

const newsForm = document.querySelector('.news form');

if (newsForm) {
  newsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const button = newsForm.querySelector('button');
    if (button) button.textContent = 'Subscribed!';
  });
}
