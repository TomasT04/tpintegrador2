const libros = [];
const carrito = [];

function agregarlibro() {
  const titulo = document.getElementById('TITULO:').value;
  const precio = document.getElementById('PRECIO:').value;

  if (titulo.trim() === '' || precio.trim() === '') {
    alert("Por favor completá los dos campos");
    return;
  }

  const libro = {
    Nombre: titulo,
    Precio: parseFloat(precio).toFixed(2)
  };

  libros.push(libro);
  mostrarLibros();
}

function mostrarLibros() {
  const salida = document.getElementById('salida');
  salida.innerHTML = ''; 

  libros.forEach((libro, index) => {
    salida.innerHTML += `
      <div >
        <strong>${libro.Nombre}</strong><br>
        Precio: $${libro.Precio}<br>
        <button onclick="agregarcarrito(${index})">Agregar al carrito</button>
      </div>
    `;
  });
}

function agregarcarrito(index) {
  carrito.push(libros[index]);
  mostrarCarrito();
}

function mostrarCarrito() {
  const divCarrito = document.getElementById('carrito');
  divCarrito.innerHTML = '<h3>Carrito de Compras</h3>';

  carrito.forEach((libro, index) => {
    divCarrito.innerHTML += `
      <p>
        • ${libro.Nombre} - $${libro.Precio}
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
      </p>
    `;
  });

  if (carrito.length === 0) {
    divCarrito.innerHTML += '<p>El carrito está vacío</p>';
  }
}

function eliminarDelCarrito(index){
  carrito.splice([index],1)
  mostrarCarrito()

}