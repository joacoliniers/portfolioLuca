function toggleTarjeta(elementoActivo) {
    let todasLasTarjetas = document.querySelectorAll('.tarjeta-exp');
    todasLasTarjetas.forEach(function(tarjeta) {
        if (tarjeta !== elementoActivo) {
            tarjeta.classList.remove('abierta');
        }
    });
    elementoActivo.classList.toggle('abierta');
}

function copiarMail() {
    const mail = "lucariver11@gmail.com";
    navigator.clipboard.writeText(mail).then(() => {
        const tooltip = document.getElementById("tooltipMail");
        const icono = document.getElementById("iconoMail");
        
        tooltip.classList.add("mostrar-tooltip");
        icono.classList.replace("fa-copy", "fa-check");
        icono.style.color = "#4CAF50";

        setTimeout(() => {
            tooltip.classList.remove("mostrar-tooltip");
            icono.classList.replace("fa-check", "fa-copy");
            icono.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}