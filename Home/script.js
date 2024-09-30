function mudarFundo(botao, cor) {
    const card = botao.closest('.card');
    const fundoVerde = 'fundo-verde';
    const fundoVermelho = 'fundo-vermelho';
    
    if (cor === 'verde') {
        card.classList.toggle(fundoVerde);
        card.classList.remove(fundoVermelho); 
    } else if (cor === 'vermelho') {
        card.classList.toggle(fundoVermelho);
        card.classList.remove(fundoVerde);
    }
}