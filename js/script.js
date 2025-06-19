document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 800, // Duración de la animación en milisegundos
        once: true     // Si la animación debe ocurrir solo una vez al desplazarse hacia abajo
    });

    const cvSendForm = document.getElementById('cvSendForm');
    const senderName = document.getElementById('senderName');
    const senderCompany = document.getElementById('senderCompany');
    const senderEmail = document.getElementById('senderEmail');
    const sendCvButton = document.getElementById('sendCvButton');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');


    // Función para validar los campos requeridos y habilitar/deshabilitar el botón
    function validateForm() {
        if (senderName.value.trim() !== '' && senderCompany.value.trim() !== '' && senderEmail.value.trim() !== '') {
            sendCvButton.removeAttribute('disabled');
        } else {
            sendCvButton.setAttribute('disabled', 'true');
        }
    }

    // Escuchar cambios en los campos del formulario para validar
    senderName.addEventListener('input', validateForm);
    senderCompany.addEventListener('input', validateForm);
    senderEmail.addEventListener('input', validateForm);

    // Escuchar el envío del formulario
    cvSendForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío por defecto del formulario

        successMessage.classList.add('d-none'); // Ocultar mensajes anteriores
        errorMessage.classList.add('d-none');

        // Aquí es donde normalmente enviarías los datos del formulario a un servidor.
        // Para este ejemplo, simularemos un envío exitoso con un retraso.
        console.log('Datos a enviar:');
        console.log('Tu Nombre:', senderName.value.trim());
        console.log('Empresa:', senderCompany.value.trim());
        console.log('Email:', senderEmail.value.trim());
        console.log('Teléfono:', document.getElementById('senderPhone').value.trim());

        // Simulación de envío exitoso
        setTimeout(() => {
            // En un entorno real, aquí se haría una petición fetch/ajax al backend para enviar el email.
            // Ejemplo de cómo se vería (no funcional sin un backend):
            /*
            fetch('/send-cv-email', { // Esta sería la URL de tu API de backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    senderName: senderName.value.trim(),
                    senderCompany: senderCompany.value.trim(),
                    senderEmail: senderEmail.value.trim(),
                    senderPhone: document.getElementById('senderPhone').value.trim()
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    successMessage.classList.remove('d-none');
                    cvSendForm.reset();
                    sendCvButton.setAttribute('disabled', 'true');
                    setTimeout(() => {
                        const sendCvFormCollapse = bootstrap.Collapse.getInstance(document.getElementById('sendCvForm'));
                        if (sendCvFormCollapse) {
                            sendCvFormCollapse.hide();
                        }
                    }, 3000);
                } else {
                    errorMessage.classList.remove('d-none');
                }
            })
            .catch(error => {
                console.error('Error al enviar el formulario:', error);
                errorMessage.classList.remove('d-none');
            });
            */

            // Por ahora, solo mostramos el mensaje de éxito (simulación)
            successMessage.classList.remove('d-none');
            cvSendForm.reset(); // Limpiar el formulario
            sendCvButton.setAttribute('disabled', 'true'); // Deshabilitar el botón de nuevo
            // Opcional: Cerrar el formulario automáticamente después de un tiempo
            setTimeout(() => {
                const sendCvFormCollapse = bootstrap.Collapse.getInstance(document.getElementById('sendCvForm'));
                if (sendCvFormCollapse) {
                    sendCvFormCollapse.hide();
                }
            }, 3000); // Cierra después de 3 segundos
        }, 1500); // Simula un retraso de 1.5 segundos
    });


    
});