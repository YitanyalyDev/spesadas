    document.addEventListener('DOMContentLoaded', function () {
        const submitButton = document.getElementById('whatsapp-button'); 
        const productName = document.getElementById('name-product'); // Este es el elemento que contiene el nombre del producto
        console.warn(productName);
        console.log(productName, 'entro el producto')
    
        if (submitButton && productName) {
          submitButton.addEventListener('click', function () {
            const phoneNumber = '573128522568'; 
            const product = productName.textContent.trim(); 
            const message = `Buen día, estoy interesado en el producto: ${product}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
          });
        } else {
          console.warn("Botón o nombre del producto no encontrados.");
        }
      });
