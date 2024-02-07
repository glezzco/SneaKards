document.addEventListener('DOMContentLoaded', ()=>{
    const CarouselItems = document.querySelectorAll('.carousel');
    M.Carousel.init(CarouselItems, {
        duration: 150,
        shift: 5,
        indicators: true,
        dist: -100,
    })
});

 // Base de datos de zapatillas
 var zapatillas = [
    {
        nombre: 'Air Force 1',
        detalle: './img/posters/airforce.jpg',
        imagen: './img/sneakers/air_force_1.png',
        poster: './img/posters/airforce.jpg',
        videoLink: 'https://www.youtube.com/watch?v=uT7eh3LdDkY&ab_channel=SneakersconVela'
    },
    {
        nombre: 'Bapesta',
        detalle: 'Información sobre Bapesta aquí',
        imagen: './img/sneakers/bapesta.png',
        poster: './img/posters/bapesta_black_white.jpg',
        videoLink: 'https://www.youtube.com/watch?v=9a08Eg24GH4&ab_channel=KronickStyle'
    },
    {
        nombre: 'Jordan Mid White',
        detalle: 'Información sobre Bapesta aquí',
        imagen: './img/sneakers/jordan_mid_white.png',
        poster: './img/posters/jordan_mid_white.jpg',
        videoLink: 'https://www.youtube.com/watch?v=Ys1kqRmYB3k&ab_channel=SneakersLifeStyleSLS'
    },
    {
        nombre: 'Retro 4 Off White',
        detalle: 'Información sobre Bapesta aquí',
        imagen: './img/sneakers/r4_ow.png',
        poster: './img/posters/AJ$_off_white.jpg',
        videoLink: 'https://www.youtube.com/watch?v=EjL195wxrgU&ab_channel=AbdielFashionCreator'

    },
    {
        nombre: 'White cement',
        detalle: 'Información sobre Bapesta aquí',
        imagen: './img/sneakers/white_cement.png',
        poster: './img/posters/white_cement.jpg',
        videoLink: 'https://www.youtube.com/watch?v=VsuRXSVjiWk&ab_channel=BULL1TRC'
    }

    // Agregar otras zapatillas como objetos en el array
];
var zapatillaSeleccionada = null; // Variable global para almacenar la zapatilla seleccionada

function cargarZapatillas() {
    var carousel = document.getElementById('carousel');

    zapatillas.forEach(function(zapatilla) {
        var divCarouselItem = document.createElement('div');
        divCarouselItem.classList.add('carousel-item');

        var img = document.createElement('img');
        img.src = zapatilla.imagen;
        img.alt = zapatilla.nombre;
        img.onclick = function() {
            zapatillaSeleccionada = zapatilla;
            mostrarDetalleZapatilla(zapatilla);
        };

        divCarouselItem.appendChild(img);
        carousel.appendChild(divCarouselItem);
    });
}

function cerrarDetalle() {
    var cerrarIcono = document.getElementById('cerrar-detalle');
    var posterZapatilla = document.getElementById('poster-zapatilla');

    cerrarIcono.addEventListener('click', function() {
        posterZapatilla.style.display = 'none';
    });
}

function mostrarDetalle() {
    var infoSneak = document.querySelector('.info_sneak');
    infoSneak.classList.add('visible');
}


function ocultarDetalleAlClicExterior() {
    document.addEventListener('click', function(event) {
        var infoSneak = document.querySelector('.info_sneak');
        var posterZapatilla = document.getElementById('poster-zapatilla');

        if (!infoSneak.contains(event.target) && posterZapatilla.style.display === 'block') {
            posterZapatilla.style.display = 'none';
        }
    });
}

function mostrarDetalleZapatilla(zapatilla) {
    var imagenPoster = document.getElementById('imagen-poster');
    var divPoster = document.getElementById('poster-zapatilla');

    divPoster.style.display = 'block'; // Mostrar el contenedor del poster

    imagenPoster.src = zapatilla.poster;
    imagenPoster.style.display = 'block'; // Mostrar la imagen del poster

    var divBotones = document.getElementById('botones-detalle');
    divBotones.innerHTML = ''; // Limpiar los botones anteriores

    var botonTallas = document.createElement('button');
    botonTallas.textContent = 'Ver tallas';
    botonTallas.classList.add('btn-tallas'); // Agrega la clase para el botón de tallas
    botonTallas.onclick = function() {
        irATallas();
    };

    var botonVideo = document.createElement('button');
    botonVideo.textContent = 'Ver video';
    botonVideo.classList.add('btn-video'); // Agrega la clase para el botón de video
    botonVideo.onclick = function() {
        verVideo(zapatilla.videoLink);
    };

    divBotones.appendChild(botonTallas);
    divBotones.appendChild(botonVideo);
}

function irATallas() {
    window.location.href = '../../tallas.php'; // Ruta hacia la página de tallas
}

function verVideo() {
    if (zapatillaSeleccionada && zapatillaSeleccionada.videoLink) {
        window.location.href = zapatillaSeleccionada.videoLink;
    } else {
        alert('No se encontró el enlace de video para esta zapatilla.');
    }
}

function obtenerZapatillaSeleccionada() {
    return zapatillaSeleccionada;
}

cerrarDetalle();
cargarZapatillas();
