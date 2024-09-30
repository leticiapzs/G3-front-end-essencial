document.addEventListener('DOMContentLoaded', function() {
    // Função que verifica as respostas do quiz
    function verificarRespostas(event) {
        event.preventDefault(); // Evita o envio do formulário para que possamos processá-lo com JavaScript

        // Respostas corretas
        const respostasCorretas = {
            q1: "18",
            q2: "Jamie",
            q3: "Escócia"
        };

        // Obter respostas do usuário
        const respostasUsuario = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value,
            q3: document.querySelector('input[name="q3"]:checked')?.value
        };

        // Verificar as respostas
        let pontuacao = 0;
        for (let [pergunta, resposta] of Object.entries(respostasUsuario)) {
            if (resposta === respostasCorretas[pergunta]) {
                pontuacao++;
            }
        }

        // Exibir resultado
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `Você acertou ${pontuacao} de 3 perguntas!`;
    }

    // Adicionar evento de envio ao formulário
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', verificarRespostas);
});
