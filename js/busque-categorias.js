var categorias = [
  {
    categoria: 'camisetas',
    mobile: 'assets/Mobile/Categorias/Categoria-camisetas.png',
    tablet: 'assets/Tablet/Categorias/Categoria-camisetas.png',
    desktop: 'assets/Desktop/Categorias/Categoria-camisetas.png',
  },
  {
    categoria: 'bolsas',
    mobile: 'assets/Mobile/Categorias/Categoria-bolsas.png',
    tablet: 'assets/Tablet/Categorias/Categoria-bolsas.png',
    desktop: 'assets/Desktop/Categorias/Categoria-bolsas.png',
  },
  {
    categoria: 'calçados',
    mobile: 'assets/Mobile/Categorias/Categoria-calçados.png',
    tablet: 'assets/Tablet/Categorias/Categoria-calçados.png',
    desktop: 'assets/Desktop/Categorias/Categoria-calçados.png',
  },
  {
    categoria: 'calças',
    mobile: 'assets/Mobile/Categorias/Categoria-calças.png',
    tablet: 'assets/Tablet/Categorias/Categoria-calças.png',
    desktop: 'assets/Desktop/Categorias/Categoria-calças.png',
  },
  {
    categoria: 'casacos',
    mobile: 'assets/Mobile/Categorias/Categoria-Casacos.png',
    tablet: 'assets/Tablet/Categorias/Categoria-casacos.png',
    desktop: 'assets/Desktop/Categorias/Categoria-casacos.png',
  },
  {
    categoria: 'óculos',
    mobile: 'assets/Mobile/Categorias/Categoria-óculos.png',
    tablet: 'assets/Tablet/Categorias/Categoria-óculos.png',
    desktop: 'assets/Desktop/Categorias/Categoria-óculos.png',
  },
];

var listaCategorias = document.querySelector('.categorias__container');

function mostrarCategorias() {
  categorias.forEach((categoria) => {
    listaCategorias.innerHTML += `
        <li class="categoria__item">
          <img
          class="categoria__item__imagem"
          srcset="
              assets/Mobile/Categorias/Categoria-${categoria.categoria}.png   768w,
              assets/Tablet/Categorias/Categoria-${categoria.categoria}.png  1440w,
              assets/Desktop/Categorias/Categoria-${categoria.categoria}.png
          "
          sizes="(max-width: 768px)768px,
              (max-width: 1440px) 1440px,
              100vw"
          src="assets/Desktop/Categorias/Categoria-${categoria.categoria}.png"
          alt="Imagem ${categoria.categoria}"
              />
          <p class="categoria__item__titulo">${categoria.categoria}</p>
        </li>
        
      `;
  });
}

mostrarCategorias();
