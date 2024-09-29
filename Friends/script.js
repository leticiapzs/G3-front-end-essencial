document.getElementById('botao-principal').addEventListener('click', function() {
    // Toca o áudio
    let audio = document.getElementById('audio');
    audio.play();

    // Abre uma nova página
    window.open('./index2.html', '_blank');

 
});