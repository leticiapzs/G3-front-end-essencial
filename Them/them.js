let totalVotos = 0;
let somaAvaliacoes = 0;

document.querySelectorAll("#estrelas span").forEach(estrelas => {
    estrelas.addEventListener("click", function() {
        const rating = this.getAttribute("data-value");
        atualizarEstrelas(rating);
        calcularMedia(rating);
    });
});

function atualizarEstrelas(rating) {
    document.querySelectorAll("#stars span").forEach(estrelas => {
        estrelas.classList.remove("active");
    });

    for (let i = 0; i < rating; i++) {
        document.querySelectorAll("#estrelas span")[i].classList.add("active");
    }

    document.getElementById("rating").textContent = `Avaliação: ${rating}`;
}

function calcularMedia(rating) {
    totalVotos++;
    somaAvaliacoes += parseInt(rating);
    const media = (somaAvaliacoes / totalVotos).toFixed(1);
    document.getElementById("media").textContent = `Média: ${media} (${totalVotos} votos)`;
}