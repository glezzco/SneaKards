document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que se envíe el formulario por defecto

      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;

      // Validación de correo electrónico simple
      if (!validateEmail(email)) {
          alert('Por favor, introduce un correo electrónico válido.');
          return;
      }else{
         // Envío del correo electrónico usando EmailJS
      emailjs.send("service_p26w5wd", "template_nj98rwq", {
        from_name: nombre,
        from_email: email,
        message: mensaje,
        to_email: "jose.gonz0410@gmail.com"
    })
    .then(function(response) {
        alert('El correo se ha enviado correctamente.');
    }, function(error) {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
    });
      }

     
  });
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}