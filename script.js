document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Menú Móvil (Hamburger) ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Accesibilidad: indicar estado expandido
      const isExpanded = navLinks.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });
  }

  // --- 2. Validación de Formulario de Contacto ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita recargar la página

      // Recoger datos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mascota = document.getElementById('mascota').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación básica
      if (!nombre || !email || !mensaje) {
        mostrarAlerta('Por favor, completa todos los campos obligatorios.', 'error');
        return;
      }

      // Simulación de envío exitoso
      // Aquí conectarías con tu backend (PHP, Node.js, etc.)
      mostrarAlerta('¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto para confirmar tu cita o resolver tus dudas.', 'success');
      contactForm.reset();
    });
  }

  // Función para mostrar alertas en el formulario
  function mostrarAlerta(mensaje, tipo) {
    formStatus.textContent = mensaje;
    formStatus.className = `alert ${tipo}`;
    
    // Ocultar mensaje después de 6 segundos
    setTimeout(() => {
      formStatus.style.display = 'none';
      formStatus.className = 'alert';
    }, 6000);
  }
});
