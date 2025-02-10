document.addEventListener('DOMContentLoaded', () => {
    // Mostrar la respuesta de la primera pregunta al cargar la página
    document.querySelector('.p-1').classList.add('visible');
    document.querySelector('#i-1').setAttribute('src', './src/assets/images/icon-minus.svg');
});

document.addEventListener('click', (e) => {
    // Objeto que desencadena el evento
    let target = e.target;

    // Elementos del DOM
    const $preguntas = document.querySelectorAll('.pregunta');
    const $respuestas = document.querySelectorAll('.respuesta');
    const $imgs = document.querySelectorAll('.icon');

    $preguntas.forEach((pregunta, index) => {
        if (pregunta.id === target.id) {
            const respuesta = document.querySelector(`.p-${index + 1}`);
            const img = document.querySelector(`#i-${index + 1}`);

            // Si la respuesta ya está visible, ocúltala
            if (respuesta.classList.contains('visible')) {
                respuesta.classList.remove('visible');
                img.setAttribute('src', './src/assets/images/icon-plus.svg');
            } else {
                // Ocultar todas las respuestas y cambiar los iconos a plus
                $respuestas.forEach((respuesta) => {
                    respuesta.classList.remove('visible');
                });
                $imgs.forEach((img) => {
                    img.setAttribute('src', './src/assets/images/icon-plus.svg');
                });

                // Mostrar la respuesta correspondiente y cambiar el icono a minus
                respuesta.classList.add('visible');
                img.setAttribute('src', './src/assets/images/icon-minus.svg');
            }
        }
    });

    $imgs.forEach((img, index) => {
        if (img.id === target.id) {
            const respuesta = document.querySelector(`.p-${index + 1}`);
            const icon = document.querySelector(`#i-${index + 1}`);

            // Si la respuesta ya está visible, ocúltala
            if (respuesta.classList.contains('visible')) {
                respuesta.classList.remove('visible');
                icon.setAttribute('src', './src/assets/images/icon-plus.svg');
            } else {
                // Ocultar todas las respuestas y cambiar los iconos a plus
                $respuestas.forEach((respuesta) => {
                    respuesta.classList.remove('visible');
                });
                $imgs.forEach((img) => {
                    img.setAttribute('src', './src/assets/images/icon-plus.svg');
                });

                // Mostrar la respuesta correspondiente y cambiar el icono a minus
                respuesta.classList.add('visible');
                icon.setAttribute('src', './src/assets/images/icon-minus.svg');
            }
        }
    });
});