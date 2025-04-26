    document.addEventListener('DOMContentLoaded', function () {
        const submitButton = document.getElementById('whatsapp-button'); 
        const productName = document.getElementById('name-product'); 
        console.warn(productName);
        console.log(productName, 'entro el producto')
    
        if (submitButton && productName) {
          submitButton.addEventListener('click', function () {
            const phoneNumber = '573128522568'; 
            const product = productName.textContent.trim(); 
            const currentUrl = window.location.href;
            const message = `Buen día, estoy interesado en el producto: ${product} que encontre en la página web: ${currentUrl}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
          });
        } else {
          console.warn("Botón o nombre del producto no encontrados.");
        }
      });
