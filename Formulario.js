// Obtener el formulario y agregar un controlador de eventos para el envío
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Crear un objeto FormData y pasarlo al formulario
  const formData = new FormData(form);

  // Convertir el objeto FormData en un objeto JSON
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Enviar los datos en formato JSON al endpoint especificado
  const URL= "https://jsonplaceholder.typicode.com/users"
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});





