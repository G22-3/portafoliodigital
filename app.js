document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.navigation').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.navigation').style.display = 'none';
});

const enlacesMenu = document.querySelectorAll('.navigation ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
        enlacesMenu.forEach(e => e.classList.remove('activo'));
        this.classList.add('activo');
        document.querySelector('.navigation').style.display = 'none';
    });
});


function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(sec => {
        sec.style.display = 'none';
    });
    const seccionSeleccionada = document.getElementById(seccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}

function mostrarVideo(event) {
    const archivo = event.target.files[0];
    const video = document.getElementById("videoPreview");
    const source = document.getElementById("videoSource");
    const placeholder = document.getElementById("videoPlaceholder");

    source.src = URL.createObjectURL(archivo);
    video.style.display = "block";
    placeholder.style.display = "none";
    video.load();
}