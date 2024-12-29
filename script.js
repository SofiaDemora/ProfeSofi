// Obtén todos los enlaces que controlan el submenú
const menuItems = document.querySelectorAll('.submenu-toggle');

// Itera sobre ellos y agrega los eventos de mouseenter y mouseleave
menuItems.forEach(item => {
    // Evento 'mouseenter' para mostrar el submenú cuando el mouse entra en el item
    item.addEventListener('mouseenter', function() {
        // Selecciona el submenú asociado a este ítem
        const submenu = this.nextElementSibling;

        // Muestra el submenú
        submenu.style.display = "block";
    });

    // Evento 'mouseleave' para ocultar el submenú cuando el mouse sale del item o del submenú
    item.addEventListener('mouseleave', function() {
        const submenu = this.nextElementSibling;

        // Retrasar el ocultado para evitar que se cierre inmediatamente al mover el mouse
        setTimeout(() => {
            if (!submenu.matches(':hover')) {
                submenu.style.display = "none";
            }
        }, 200); // Retraso de 200ms para permitir que el mouse se mueva al submenú
    });
    
    // Cuando el mouse entra en el submenú, aseguramos que se mantenga visible
    const submenu = item.nextElementSibling;
    if (submenu) {
        submenu.addEventListener('mouseenter', function() {
            submenu.style.display = "block";
        });

        submenu.addEventListener('mouseleave', function() {
            submenu.style.display = "none";
        });
    }
});
