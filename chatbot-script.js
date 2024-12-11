// Este script se encarga de la lógica del chatbot y debe ser cargado una vez el modal esté insertado en el DOM

// Cargar mensajes desde localStorage al abrir el modal
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(msg => {
        addMessage(msg.sender, msg.message);
    });
}

// Agregar evento al botón de enviar
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Mostrar el mensaje del usuario
    addMessage('user', userInput);
    document.getElementById('user-input').value = '';

    // Responder con el chatbot
    const botResponse = getBotResponse(userInput);
    addMessage('bot', botResponse);

    // Guardar mensajes en localStorage
    saveMessages('user', userInput);
    saveMessages('bot', botResponse);
});

// Agregar evento para detectar la tecla Enter
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el comportamiento predeterminado de Enter
        document.getElementById('send-button').click(); // Simular clic en el botón
    }
});

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'message user-message' : 'message bot-message';
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplazar hacia abajo
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('adoptar')) {
        return 'Para adoptar una mascota, visita nuestro catálogo disponible en nuestra pagina web, selecciona una mascota, y sigue las instrucciones en la sección de adopción. ¡Te ayudaremos en cada paso!';
    } else if (lowerInput.includes('adopción')) {
        return 'Para adoptar una mascota, visita nuestro catálogo disponible en nuestra pagina web, selecciona una mascota, y sigue las instrucciones en la sección de adopción. ¡Te ayudaremos en cada paso!';
    } else if (lowerInput.includes('adopcion')) {
        return 'Para adoptar una mascota, visita nuestro catálogo disponible en nuestra pagina web, selecciona una mascota, y sigue las instrucciones en la sección de adopción. ¡Te ayudaremos en cada paso!';
    } else if (lowerInput.includes('donaciones')) {
        return 'Puedes hacer una donación desde nuestra sección de Donaciones en el menú principal. ¡Gracias por tu apoyo!';
    } else if (lowerInput.includes('donar')) {
        return 'Puedes hacer una donación desde nuestra sección de Donaciones en el menú principal. ¡Gracias por tu apoyo!';
    } else if (lowerInput.includes('donación')) {
        return 'Puedes hacer una donación desde nuestra sección de Donaciones en el menú principal. ¡Gracias por tu apoyo!';
    } else if (lowerInput.includes('donacion')) {
        return 'Puedes hacer una donación desde nuestra sección de Donaciones en el menú principal. ¡Gracias por tu apoyo!';
    } else if (lowerInput.includes('mascota')) {
        return 'Puedes ver todas nuestras mascotas disponibles en la sección de Catálogo de Mascotas.';
    } else if (lowerInput.includes('mascotas')) {
        return 'Puedes ver todas nuestras mascotas disponibles en la sección de Catálogo de Mascotas.';
    } else if (lowerInput.includes('contacto')) {
        return 'Puedes contactarnos desde nuestra página de Contacto o escribirnos directamente a huellitasurbanas@gmail.com';
    } else if (lowerInput.includes('contactar')) {
        return 'Puedes contactarnos desde nuestra página de Contacto o escribirnos directamente a huellitasurbanas@gmail.com';
    } else {
        return 'Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?';
    }
}

