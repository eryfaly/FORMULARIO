// Obtener el formulario por su ID
const contactForm = document.getElementById('contactForm');

// Escuchar el evento de envío del formulario
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Crear un objeto para almacenar los datos
  const formData = {
    name: name,
    email: email,
    message: message
  };

  // Puedes realizar alguna acción con el objeto formData aquí, como enviarlo a un servidor o mostrarlo en la consola
  console.log(formData);

  // También puedes limpiar el formulario después de capturar los datos
  contactForm.reset();
});