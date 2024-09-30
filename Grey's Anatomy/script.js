const modal = document.getElementById("modal");
const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");
const enviarAvaliacao = document.getElementById("enviarAvaliacao");
const mensagem = document.getElementById("mensagem");

abrirModal.onclick = function() {
    modal.style.display = "block";
}

fecharModal.onclick = function() {
    modal.style.display = "none";
}

enviarAvaliacao.onclick = function() {
    const avaliacao = document.getElementById("avaliacao").value;
    if (avaliacao) {
        mensagem.innerHTML = `Obrigado pela sua avaliação! <span class="fechar" id="fecharMensagem">&times;</span>`;
        mensagem.style.color = "black";
        document.getElementById("avaliacao").value = ""; 
        setTimeout(() => {
            modal.style.display = "none"; 
        }, 3000); 
    } else {
        mensagem.textContent = "Por favor, escreva sua avaliação.";
        mensagem.style.color = "red";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'fecharMensagem') {
        mensagem.innerHTML = '';
    }
});


