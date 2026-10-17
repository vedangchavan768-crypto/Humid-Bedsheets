// Mobile menu: open and close with the burger button
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', function () {
  menu.classList.toggle('open');
});

// Close the mobile menu after tapping a link
document.querySelectorAll('.menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('open');
  });
});

// Newsletter form: show a confirmation instead of reloading the page
const newsForm = document.querySelector('.news form');

newsForm.addEventListener('submit', function (event)event.preventDefault();
  newsForm.querySelector('button').textContent = 'Subscribed!';
}
