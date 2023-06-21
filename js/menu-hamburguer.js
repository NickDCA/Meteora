const menuBotao = document.querySelector('.menu__botao');

const imgMenuAbrir = 'url(../assets/nav/abrir.svg)';
const imgMenuFechar = 'url(../assets/nav/fechar.svg)';

menuBotao.addEventListener('click', () => {
  const menuNav = document.querySelector('.menu__nav');
  console.log(menuNav.classList);
  menuNav.classList.contains('menu-active')
    ? (menuBotao.style.backgroundImage = imgMenuAbrir)
    : (menuBotao.style.backgroundImage = imgMenuFechar);

  menuNav.classList.toggle('menu-active');
  console.log(menuNav.classList);
});
