/* 
  ========================================================================
  NOTAS DE EDICIÓN RÁPIDA:
  - Fecha objetivo de la boda: Modifica la constante 'weddingDate' 
    si necesitas cambiar el día o la hora del evento.
  ========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btn-abrir');
    const portada = document.getElementById('portada');
    const invitacionMain = document.getElementById('invitacion-main');

    // Transición para abrir la invitación
    if (btnAbrir) {
        btnAbrir.addEventListener('click', () => {
            portada.style.opacity = '0';
            portada.style.transition = 'opacity 0.6s ease';
            
            setTimeout(() => {
                portada.classList.add('hidden');
                invitacionMain.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 600);
        });
    }

    // Configuración de la cuenta regresiva (28 de Noviembre de 2026, 16:30:00)
    const weddingDate = new Date('November 28, 2026 16:30:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const daysSpan = document.getElementById('days');
        const hoursSpan = document.getElementById('hours');
        const minutesSpan = document.getElementById('minutes');
        const secondsSpan = document.getElementById('seconds');

        if (distance < 0) {
            // Si la fecha ya pasó
            if (daysSpan) daysSpan.innerText = '00';
            if (hoursSpan) hoursSpan.innerText = '00';
            if (minutesSpan) minutesSpan.innerText = '00';
            if (secondsSpan) secondsSpan.innerText = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysSpan) daysSpan.innerText = String(days).padStart(2, '0');
        if (hoursSpan) hoursSpan.innerText = String(hours).padStart(2, '0');
        if (minutesSpan) minutesSpan.innerText = String(minutes).padStart(2, '0');
        if (secondsSpan) secondsSpan.innerText = String(seconds).padStart(2, '0');
    }

    // Ejecutar inmediatamente y luego cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});