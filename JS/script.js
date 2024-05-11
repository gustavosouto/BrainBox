const imagens = document.querySelectorAll('.imagens li');
const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');

let indiceAtual = 0;

function mostrarImagem(indice) {
    imagens.forEach(imagem => imagem.style.display = 'none');
    imagens[indice].style.display = 'block';
}

mostrarImagem(indiceAtual);

anterior.addEventListener('click', () => {
    if (indiceAtual === 0) {
        indiceAtual = imagens.length - 1;
    } else {
        indiceAtual--;
    }
    mostrarImagem(indiceAtual);
});

proximo.addEventListener('click', () => {
    if (indiceAtual === imagens.length - 1) {
        indiceAtual = 0;
    } else {
        indiceAtual++;
    }
    mostrarImagem(indiceAtual);
});