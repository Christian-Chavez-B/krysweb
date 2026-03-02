const valores = document.querySelectorAll('.valor-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

valores.forEach(valor => {
    observer.observe(valor);
});

// === FORMULARIO CONTACTO PRO ===

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        message.style.display = "block";
        message.style.color = "#00ff88";
        message.innerHTML = "✅ Mensaje enviado correctamente. Nos pondremos en contacto pronto.";
        form.reset();
    })
    .catch(error => {
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "❌ Ocurrió un error. Intenta nuevamente.";
    });
});