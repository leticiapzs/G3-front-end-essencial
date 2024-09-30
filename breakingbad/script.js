function submitQuiz() {
    const totalQuestions = 10;
    let score = 0;

    const answers = {
        question1: 'Walter White',
        question2: 'Professor de química',
        question3: 'Jesse Pinkman',
        question4: 'Uma mosca',
        question5: 'James McGill',
        question6: 'Libélula',
        question7: 'Ao fazer metanfetamina',
        question8: 'Professor e aluno',
        question9: 'Ela se torna cúmplice',
        question10: 'Walter White Jr'
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = `question${i}`;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

        console.log(`Selected option for ${questionName}:`, selectedOption ? selectedOption.value : 'None');

        if (selectedOption && selectedOption.value === answers[questionName]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    const percentage = (score / totalQuestions) * 100;

    let classification;
    if (score <= 3) {
        classification = "Novato! Poxa, você ainda sabe muito pouco sobre a série. Que tal assistir mais episódios para ficar por dentro de tudo? ;)";
    } else if (score <= 6) {
        classification = "Apreciador! Você tem bons conhecimentos sobre a série";
    } else if (score <= 9) {
        classification = "Fanático! Uau, você realmente é um grande fã da série.";
    } else {
        classification = "Expert! Parabéns! Você é um especialista quando se trata de Breaking Bad :)";
    }

    resultDiv.innerHTML = `Você acertou ${score} de ${totalQuestions} questões! Classificação: ${classification} (${percentage.toFixed(2)}%)`;
}
