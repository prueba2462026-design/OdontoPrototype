// Hacemos la llamada al archivo JSON
fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        
        // 1. Cargar datos de la Clínica
        document.getElementById('clinica-nombre').textContent = datos.clinica.nombre;
        document.getElementById('clinica-slogan').textContent = datos.clinica.slogan;
        document.getElementById('clinica-sobre-nosotros').textContent = datos.clinica.sobre_nosotros;

        // 2. Cargar datos de Contacto
        document.getElementById('contacto-telefono').textContent = datos.contacto.telefono;
        document.getElementById('contacto-direccion').textContent = datos.contacto.direccion;
        document.getElementById('contacto-whatsapp').href = datos.contacto.redes_sociales.whatsapp;

        // 3. Cargar los Servicios dinámicamente
        const contenedorServicios = document.getElementById('lista-servicios');
        
        datos.servicios.forEach(servicio => {
            // Creamos una tarjeta HTML por cada servicio en el JSON
            const tarjetaHTML = `
                <div class="tarjeta">
                    <h4>${servicio.titulo}</h4>
                    <p>${servicio.descripcion}</p>
                </div>
            `;
            // La inyectamos en el contenedor
            contenedorServicios.innerHTML += tarjetaHTML;
        });

    })
    .catch(error => console.error("Hubo un error cargando el JSON:", error));
