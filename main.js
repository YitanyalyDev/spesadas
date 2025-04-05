    // const whatsappButtons = document.querySelectorAll('.whatsapp-button');
    // const productName = document.getElementById('name-product'); 
    // print(productName);

    // whatsappButtons.forEach(button => {
    //   button.addEventListener('click', function () {
    //     const phoneNumber = '573112135011'; 
    //     const message = `Buen dia, estoy interesado en el producto: ${productName}`;
    //     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    //     window.open(url, '_blank');
    //   });
    // });

    document.addEventListener('DOMContentLoaded', function () {
        const submitButton = document.getElementById('whatsapp-button'); 
        const productName = document.getElementById('name-product'); // Este es el elemento que contiene el nombre del producto
        console.warn(productName);
        print(productName);
        console.log(productName, 'entro el producto')
    
        if (submitButton && productName) {
          submitButton.addEventListener('click', function () {
            const phoneNumber = '573112135011'; 
            const product = productName.textContent.trim(); 
            const message = `Buen día, estoy interesado en el producto: ${product}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
          });
        } else {
          console.warn("Botón o nombre del producto no encontrados.");
        }
      });