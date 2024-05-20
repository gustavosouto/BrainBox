const slides = document.querySelectorAll('.carousel .slides li');
const indicadores = document.querySelectorAll('.carousel .indicadores button');
const anterior = document.querySelector('.carousel .anterior');
const proximo = document.querySelector('.carousel .proximo');

let slideAtual = 0;
let intervaloTroca = 5000;
let intervaloID;

function mostrarSlide(indice) {
    if (indice >= 0 && indice < slides.length) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[indice].style.display = 'block';

        indicadores.forEach(indicador => indicador.classList.remove('ativo'));
        indicadores[indice].classList.add('ativo');
    }
}

function avancarSlide() {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
    reiniciarIntervalo();
}

function retrocederSlide() {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
    reiniciarIntervalo();
}

function iniciarIntervalo() {
    intervaloID = setInterval(avancarSlide, intervaloTroca);
}

function reiniciarIntervalo() {
    clearInterval(intervaloID);
    iniciarIntervalo();
}

// Adicionando event listeners para os botões anterior e próximo
anterior.addEventListener('click', retrocederSlide);
proximo.addEventListener('click', avancarSlide);

// Adicionando event listeners para os indicadores
indicadores.forEach((indicador, indice) => {
    indicador.addEventListener('click', () => {
        mostrarSlide(indice);
        reiniciarIntervalo();
    });
});

// Iniciar o intervalo quando a página for carregada
iniciarIntervalo();