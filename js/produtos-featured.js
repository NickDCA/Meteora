var produtosJSON = [
  {
    titulo: 'Camiseta Conforto',
    item: 'camiseta',
    descricao:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    preco: 'R$ 70,00',
    mobile: 'assets/Mobile/Imagens-Cards/camiseta.png',
    tablet: 'assets/Tablet/Imagens-Cards/camiseta.png',
    desktop: 'assets/Desktop/Imagens-Cards/camiseta.png',
  },
  {
    titulo: 'Calça Alfaiataria',
    item: 'calça',
    descricao: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    preco: 'R$ 180,00',
    mobile: 'assets/Mobile/Imagens-Cards/calça.png',
    tablet: 'assets/Tablet/Imagens-Cards/calça.png',
    desktop: 'assets/Desktop/Imagens-Cards/calça.png',
  },
  {
    titulo: 'Tênis Chunky',
    item: 'tenis',
    descricao:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    preco: 'R$ 250,00',
    mobile: 'assets/Mobile/Imagens-Cards/tenis.png',
    tablet: 'assets/Tablet/Imagens-Cards/tenis.png',
    desktop: 'assets/Desktop/Imagens-Cards/tenis.png',
  },
  {
    titulo: 'Jaqueta Jeans',
    item: 'jaqueta',
    descricao:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    preco: 'R$ 150,00',
    mobile: 'assets/Mobile/Imagens-Cards/jaqueta.png',
    tablet: 'assets/Tablet/Imagens-Cards/jaqueta.png',
    desktop: 'assets/Desktop/Imagens-Cards/jaqueta.png',
  },
  {
    titulo: 'Óculos Redondo',
    item: 'óculos',
    descricao: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    preco: 'R$ 120,00',
    mobile: 'assets/Mobile/Imagens-Cards/óculos.png',
    tablet: 'assets/Tablet/Imagens-Cards/óculos.png',
    desktop: 'assets/Desktop/Imagens-Cards/óculos.png',
  },
  {
    titulo: 'Bolsa coringa',
    item: 'bolsa',
    descricao:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    preco: 'R$ 120,00',
    mobile: 'assets/Mobile/Imagens-Cards/bolsa.png',
    tablet: 'assets/Tablet/Imagens-Cards/bolsa.png',
    desktop: 'assets/Desktop/Imagens-Cards/bolsa.png',
  },
];

var produtosFeatured = document.querySelector('.produtos__featured');

function mostrarFeatured() {
  produtosJSON.forEach((produto) => {
    produtosFeatured.innerHTML += `
        <li class="produto">
            <img
                class="produto__imagem"
                srcset="
                ${produto.mobile}   768w,
                ${produto.tablet}  1440w,
                ${produto.desktop}
                "
                sizes="(max-width: 768px)768px,
                    (max-width: 1440px) 1440px,
                    100vw"
                src="${produto.desktop}"
                alt="Imagem do produto ${produto.titulo}"
            />
            <h4 class="produto__titulo">${produto.titulo}</h4>
            <p class="produto__descricao">
            ${produto.descricao}
            </p>
            <p class="produto__preco">${produto.preco}</p>
            <button class="produto__botao">Ver mais</button>
        </li>
    `;
  });
}

mostrarFeatured();
