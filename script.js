
const misBotones = document.querySelectorAll("bNav");

misBotones.forEach((bNav, i) => { //Recorremos cada botón.
    bNav.addEventListener('click', () => { //Cuando se clickee uno.

        misBotones.forEach(bNav => bNav.classList.remove("activo")); //Le sacamos el click a los demás botones-
        //(no nos interesa verlo activo si no estamos en ese submenú).
        bNav.classList.add("activo"); //Le damos el activo al botón que se clickeó actualmente.

    });
});

const contenido = document.getElementById("cont");

function cargarEnContenido(html){ //Desde el botón obtenemos el html correspondiente.
    fetch(html) //Documento html que quiero visualizar en la página.
    .then(response => response.text()) //Lo obtenemos y lo convertimos en texto.
    .then(data => {
        contenido.innerHTML = data; //Ese texto lo mostramos en nuestro div con id = contenido.
    })
    const cab = document.getElementById("cab");
    cab.style.display = "none";
}




document.addEventListener("DOMContentLoaded", function() {
    const optionButtons = document.querySelectorAll(".bOption");
    const options = document.querySelectorAll(".option");

    function mostrarOpcion(index) {
        options.forEach((menu, i) => {
            // Mostrar u ocultar el submenú en función del índice
            if (i === index) {
                menu.style.display = menu.style.display === "block" ? "none" : "block";
                
                // Obtener las coordenadas del botón
                const boton = optionButtons[i];
                const rect = boton.getBoundingClientRect();

                menu.style.width = rect.width + 'px';
                // Posicionar la opción justo debajo del botón
                menu.style.left = rect.left + 'px'; // Alinea a la izquierda del botón
                menu.style.top = rect.bottom + 'px'; // Posiciona justo debajo del botón
            } else {
                menu.style.display = "none"; // Cerrar las otras opciones
            }
        });
    }

    // Cerrar menús si se hace clic fuera de ellos
    document.addEventListener("click", function(event) {
        // Si el clic no es dentro de un botón o una opción, cerrar todas las opciones
        if (![...optionButtons].some(btn => btn.contains(event.target)) &&
            ![...options].some(menu => menu.contains(event.target))) {
            options.forEach(menu => menu.style.display = "none");
        }
    });

    // Agregar el evento de clic a cada botón
    optionButtons.forEach((button, index) => {
        button.addEventListener("click", function(event) {
            mostrarOpcion(index);
            event.stopPropagation(); // Evitar que el clic cierre el menú
        });
    });
});



// // Obtén todos los enlaces que controlan el submenú
// const menuItems = document.querySelectorAll('.submenu-toggle');

// // Itera sobre ellos y agrega los eventos de mouseenter y mouseleave
// menuItems.forEach(item => {
//     // Evento 'mouseenter' para mostrar el submenú cuando el mouse entra en el item
//     item.addEventListener('mouseenter', function() {
//         // Selecciona el submenú asociado a este ítem
//         const submenu = this.nextElementSibling;

//         // Muestra el submenú
//         submenu.style.display = "block";
//     });

//     // Evento 'mouseleave' para ocultar el submenú cuando el mouse sale del item o del submenú
//     item.addEventListener('mouseleave', function() {
//         const submenu = this.nextElementSibling;

//         // Retrasar el ocultado para evitar que se cierre inmediatamente al mover el mouse
//         setTimeout(() => {
//             if (!submenu.matches(':hover')) {
//                 submenu.style.display = "none";
//             }
//         }, 200); // Retraso de 200ms para permitir que el mouse se mueva al submenú
//     });
    
//     // Cuando el mouse entra en el submenú, aseguramos que se mantenga visible
//     const submenu = item.nextElementSibling;
//     if (submenu) {
//         submenu.addEventListener('mouseenter', function() {
//             submenu.style.display = "block";
//         });

//         submenu.addEventListener('mouseleave', function() {
//             submenu.style.display = "none";
//         });
//     }
// });
