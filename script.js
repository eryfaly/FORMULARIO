function enviarFormulario() {
    
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const comentario= document.getElementById("comentario").value;
 
    const formData = {
        nombre: nombre,
        correo: correo,
        comentario:comentario
    };
    console.log(formData);

    const mensajeAlerta = `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\nComentario: ${formData.comentario}`;
    alert(mensajeAlerta);
}



