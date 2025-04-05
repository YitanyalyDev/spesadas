document.addEventListener('DOMContentLoaded', function () {
    const whatsappButtons = document.querySelectorAll('.whatsapp-button');
    const productId = document.getElementById('name-product'); 
    
    whatsappButtons.forEach(button => {
      button.addEventListener('click', function () {
        const phoneNumber = '573112135011'; 
        const message = `Buen dia, estoy interesado en el producto: ${productId}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      });
    });
  });