let posicaoAtual = 0;

function moverCarrossel(direcao) {
    const carrosselWrapper = document.querySelector('.carrossel-wrapper');
    const itens = document.querySelectorAll('.carrossel-item');
    const itemWidth = itens[0].offsetWidth; // Pega a largura de um item
    const totalItens = itens.length;

    // Atualiza a posição atual
    posicaoAtual += direcao;

    // Se a posição for menor que 0, vai para o último item
    if (posicaoAtual < 0) {
        posicaoAtual = totalItens - 1;
    } 
    // Se a posição for maior que o total de itens, volta para o início
    else if (posicaoAtual >= totalItens) {
        posicaoAtual = 0;
    }

    // Move o carrossel multiplicando a posição pela largura do item
    carrosselWrapper.style.transform = `translateX(-${posicaoAtual * itemWidth}px)`;
}
