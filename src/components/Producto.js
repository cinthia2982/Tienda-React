import React from 'react';

function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <button className="btn btn-primary" onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Producto;
