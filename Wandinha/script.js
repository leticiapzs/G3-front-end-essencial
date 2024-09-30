let posicaoAtual = 0;

function moverCarrossel(direcao) {
    const carrosselWrapper = document.querySelector('.carrossel-wrapper');
    const itens = document.querySelectorAll('.carrossel-item');

    posicaoAtual += direcao;

    if (posicaoAtual < 0) {
        posicaoAtual = itens.length - 1;
    } else if (posicaoAtual >= itens.length) {
        posicaoAtual = 0;
    }

    carrosselWrapper.style.transform = `translateX(-${posicaoAtual * 100}%)`;
}
