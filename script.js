// 1. GIRO DE CARTAS (Servicios)
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
});

// 2. NAVEGACIÓN POR FLECHAS (Valores)
const slider = document.getElementById('valoresSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (nextBtn && prevBtn && slider) {
    nextBtn.addEventListener('click', () => {
        // Desplaza el ancho de una carta + el gap (220px + 20px)
        slider.scrollLeft += 240; 
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollLeft -= 240;
    });
}

// 3. FORMULARIO (Tu código existente)
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        message.style.display = "block";
        message.style.color = "#00ff88";
        message.innerHTML = "✅ Mensaje enviado correctamente.";
        form.reset();
    })
    .catch(error => {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "❌ Error al enviar.";
    });
});