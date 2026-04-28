function toggleTarjeta(elementoActivo) {
    let todasLasTarjetas = document.querySelectorAll('.tarjeta-exp');
    todasLasTarjetas.forEach(function(tarjeta) {
        if (tarjeta !== elementoActivo) {
            tarjeta.classList.remove('abierta');
        }
    });
    elementoActivo.classList.toggle('abierta');
}

