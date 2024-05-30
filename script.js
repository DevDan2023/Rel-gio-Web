// Criando a função para as horas
function horaRelogio() {
    const agora = new Date();
    const hora = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getMinutes()).padStart(2,'0')
    const segundos = String(agora.getSeconds()).padStart(2,'0');
    document.getElementById('clock').textContent = `${hora}:${minutos}:${segundos}`;

    // Criando a lógica para mudança do fundo do relógio
    const body = document.body;
    if (hora >= 6 && hora < 18) {
        body.classList.add('dia');
        body.classList.remove('noite');
    } else {
        body.classList.add('noite');
        body.classList.remove('dia');
    }
}


setInterval(horaRelogio, 1000);
horaRelogio();