// Obtener el formulario por su ID
const contactForm = document.getElementById('Form');

// Escuchar el evento de envío del formulario
contactForm.addEventListener('Submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('correo').value;
  const message = document.getElementById('Enviar').value;

  // Crear un objeto para almacenar los datos
  const datos = {
    name: name,
    email: correo,
    message: Enviar
  };

  // Puedes realizar alguna acción con el objeto formData aquí, como enviarlo a un servidor o mostrarlo en la consola
  console.log(datos);

  // También puedes limpiar el formulario después de capturar los datos
  contactForm.reset();
});