fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // Asignar textos principales
        document.getElementById('clinica-slogan').textContent = datos.clinica.slogan;
        document.getElementById('clinica-sobre-nosotros').textContent = datos.clinica.sobre_nosotros;
        document.getElementById('contacto-direccion').textContent = datos.contacto.direccion;
        document.getElementById('contacto-whatsapp').href = datos.contacto.redes_sociales.whatsapp;

        const contenedorServicios = document.getElementById('lista-servicios');
        contenedorServicios.innerHTML = ''; // Limpiar

        // Mapeo de íconos para que se vean como en tu ejemplo
        const iconMapping = {
            "odontologia-general": "fa-user-doctor",
            "ortodoncia": "fa-teeth",
            "estetica-dental": "fa-sparkles",
            "implantes": "fa-tooth"
        };

        datos.servicios.forEach(servicio => {
            const iconClass = iconMapping[servicio.id] || "fa-tooth";
            const tarjetaHTML = `
                <div class="tarjeta-tratamiento">
                    <div class="tarjeta-cuerpo">
                        <h4>${servicio.titulo}</h4>
                        <p>${servicio.descripcion}</p>
                    </div>
                    <div class="tarjeta-icono">
                        <i class="fa-solid ${iconClass}"></i>
                    </div>
                </div>
            `;
            contenedorServicios.innerHTML += tarjetaHTML;
        });
    })
    .catch(error => console.error("Error:", error));
