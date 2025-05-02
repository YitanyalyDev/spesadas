document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('whatsapp-button'); 
    const productName = document.getElementById('name-product'); // Nombre del producto
    const linkProduct = document.getElementById('link-product'); // Link personalizado del producto
    const productCategory = document.getElementById('product-category'); // Elemento que contiene la categoría

    if (submitButton && productName) {
        submitButton.addEventListener('click', function () {
            // Determinar el número según la categoría
            let phoneNumber;
            if (productCategory && productCategory.textContent.toLowerCase().includes('repuestos')) {
                phoneNumber = '573106615819';
            } else {
                phoneNumber = '573128522568'; 
            }
            
            const product = productName.textContent.trim(); 
            
            let currentUrl = window.location.href;
            if (linkProduct && linkProduct.textContent.trim() !== '') {
                currentUrl = linkProduct.textContent.trim();
            }

            const message = `Buen día, estoy interesado en el producto: ${product}. Aquí vi el producto: ${currentUrl}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, '_blank');
        });
    } else {
        console.warn("Botón o nombre del producto no encontrados.");
    }
});
