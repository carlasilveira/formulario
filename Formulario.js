    //Función para enviar los datos
function enviarDatos(form) {
    const datos = new FormData(form);
    const data = {};
    for (const [key, value] of datos.entries()) {
      data[key] = value;
    }
  
    // Enviar al endpoint
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  
  // Evento para enviar formulario
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    // Llamada a la función
    enviarDatos(form);
  });
  




