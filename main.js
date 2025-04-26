document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('whatsapp-button'); 
    const productName = document.getElementById('name-product'); // Nombre del producto
    const linkProduct = document.getElementById('link-product'); // Link personalizado del producto

    if (submitButton && productName) {
        submitButton.addEventListener('click', function () {
            const phoneNumber = '573112135011'; 
            const product = productName.textContent.trim(); 
            
            let currentUrl = window.location.href; // Valor por defecto
            if (linkProduct && linkProduct.textContent.trim() !== '') {
                currentUrl = linkProduct.textContent.trim(); // Usamos el link-product si existe y no está vacío
            }

            const message = `Buen día, estoy interesado en el producto: ${product}. Aquí vi el producto: ${currentUrl}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, '_blank');
        });
    } else {
        console.warn("Botón o nombre del producto no encontrados.");
    }
});
