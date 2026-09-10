// Menú hamburguesa móvil — compartido por todas las páginas
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.getElementById('burgerBtn');
  var nav = document.querySelector('header nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // cerrar el menú al pulsar cualquier enlace
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});
