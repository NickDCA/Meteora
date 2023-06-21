const menuBotao = document.querySelector('.menu__botao');

const imgMenuAbrir = 'url(../assets/nav/abrir.svg)';
const imgMenuFechar = 'url(../assets/nav/fechar.svg)';

menuBotao.addEventListener('click', () => {
  const menuNav = document.querySelector('.menu__nav');

  if (menuNav.classList.contains('menu-active')) {
    menuBotao.style.backgroundImage = imgMenuAbrir;
    menuNav.style.display = 'none';
  } else {
    menuBotao.style.backgroundImage = imgMenuFechar;
    menuNav.style.display = 'block';
  }

  menuNav.classList.toggle('menu-active');
});
