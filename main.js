document.addEventListener('DOMContentLoaded', function() {
    const serviceElement = document.getElementById('service'); // Elemento que contiene el tipo de servicio
    
    if (serviceElement) {
        const serviceType = serviceElement.textContent.trim().toLowerCase();
        let phoneNumber;
        let serviceName;
        
        // Asignar número y nombre legible según categoría
        switch(true) {
            case serviceType.includes('mantenimiento') || serviceType.includes('reparacion') || serviceType.includes('soporte'):
                phoneNumber = '573105234085'; // Número para Soporte/Mantenimiento/Reparación
                serviceName = 'Soporte, mantenimiento o reparación';
                break;
            case serviceType.includes('repuesto'):
                phoneNumber = '573106615819'; // Número para Repuestos
                serviceName = 'Repuestos';
                break;
            case serviceType.includes('maquinaria')|| serviceType.includes('venta') || serviceType.includes('venta de maquinaria'):
                phoneNumber = '573128522568'; // Número para Maquinaria
                serviceName = 'Maquinaria';
                break;
            case serviceType.includes('alquiler'):
                phoneNumber = '573128522568'; // Número para Alquiler
                serviceName = 'Alquiler';
                break;
            default:
                phoneNumber = '573106615819'; // Número por defecto
                serviceName = 'servicio'; // Nombre genérico
        }
        
        // Crear mensaje estándar
        const message = `Buen día, llegué desde la página web para consultar sobre ${serviceName}, agradezco su ayuda`;
        
        // Redireccionar a WhatsApp (ejemplo con botón)
        const whatsappButton = document.getElementById('whatsapp-button');
        if (whatsappButton) {
            whatsappButton.addEventListener('click', function() {
                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            });
        }
        
        // Opcional: Mostrar en consola para debug
        console.log('Servicio detectado:', serviceType, '→ Número asignado:', phoneNumber);
    }
});
