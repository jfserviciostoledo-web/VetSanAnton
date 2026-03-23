document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú Móvil
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
      if(isExpanded) {
        hamburger.innerHTML = '<i class="ph ph-x"></i>';
      } else {
        hamburger.innerHTML = '<i class="ph ph-list"></i>';
      }
    });
  }

  // 2. Validación de Formulario de Contacto (con RGPD)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      const rgpd = document.getElementById('rgpd').checked;

      if (!nombre || !email || !mensaje) {
        mostrarAlerta('Por favor, completa todos los campos obligatorios.', 'error');
        return;
      }
      
      if (!rgpd) {
        mostrarAlerta('Debes aceptar la política de privacidad para enviar el mensaje.', 'error');
        return;
      }

      mostrarAlerta('¡Gracias por contactarnos! Hemos recibido tu mensaje.', 'success');
      contactForm.reset();
    });
  }

  function mostrarAlerta(mensaje, tipo) {
    formStatus.textContent = mensaje;
    formStatus.className = `alert ${tipo}`;
    setTimeout(() => {
      formStatus.style.display = 'none';
      formStatus.className = 'alert';
    }, 6000);
  }
});
