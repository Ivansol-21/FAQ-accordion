document.addEventListener('click', (e) => {
    // Objeto que desencadena el evento
    let target = e.target;

    // Elementos del DOM
    const $respuesta1 = document.querySelector('.respuesta-1');
    const $respuesta2 = document.querySelector('.respuesta-2');
    const $respuesta3 = document.querySelector('.respuesta-3');
    const $respuesta4 = document.querySelector('.respuesta-4');
    
    const $img1 = document.querySelector('.icon-plus-1');
    const $img2 = document.querySelector('.icon-plus-2');
    const $img3 = document.querySelector('.icon-plus-3');
    const $img4 = document.querySelector('.icon-plus-4');

    // Evento click segun corresponda
    if(target.matches('.pregunta-1') || target.matches('.icon-plus-1')){
        $respuesta1.classList.toggle('respuesta-1-none');
        if($respuesta1.classList.contains('respuesta-1-none')){
            $img1.setAttribute('src', './src/assets/images/icon-plus.svg');
        }else{
            $img1.setAttribute('src', './src/assets/images/icon-minus.svg');
        }
    }
    /* ----------------------------------------------------------------------- */
    if(target.matches('.pregunta-2') || target.matches('.icon-plus-2')){
        $respuesta2.classList.toggle('visible');
        if($respuesta2.classList.contains('visible')){
            $img2.setAttribute('src', './src/assets/images/icon-minus.svg');
        }else{
            $img2.setAttribute('src', './src/assets/images/icon-plus.svg');
        }
    }
    /* ----------------------------------------------------------------------- */
    if(target.matches('.pregunta-3') || target.matches('.icon-plus-3')){
        $respuesta3.classList.toggle('visible');
        if($respuesta3.classList.contains('visible')){
            $img3.setAttribute('src', './src/assets/images/icon-minus.svg');
        }else{
            $img3.setAttribute('src', './src/assets/images/icon-plus.svg');
        }
    }
    /* ----------------------------------------------------------------------- */
    if(target.matches('.pregunta-4') || target.matches('.icon-plus-4')){
        $respuesta4.classList.toggle('visible');
        if($respuesta4.classList.contains('visible')){
            $img4.setAttribute('src', './src/assets/images/icon-minus.svg');
        }else{
            $img4.setAttribute('src', './src/assets/images/icon-plus.svg');
        }
    }

});