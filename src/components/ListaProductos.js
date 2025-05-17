import React, { Component } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
  state = {
    productos: [
      { id: 1, nombre: 'Producto 1', precio: 1000, imagen: 'https://via.placeholder.com/150' },
      { id: 2, nombre: 'Producto 2', precio: 2000, imagen: 'https://via.placeholder.com/150' },
      { id: 3, nombre: 'Producto 3', precio: 3000, imagen: 'https://via.placeholder.com/150' },
    ],
    carrito: []
  };

  agregarAlCarrito = (producto) => {
    this.setState(prevState => ({
      carrito: [...prevState.carrito, producto]
    }));
  };

  render() {
    return (
      <div>
        <h2>Lista de Productos</h2>
        <div className="d-flex flex-wrap">
          {this.state.productos.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
              agregarAlCarrito={this.agregarAlCarrito}
            />
          ))}
        </div>
        <h3>Carrito</h3>
        <ul>
          {this.state.carrito.map((producto, index) => (
            <li key={index}>{producto.nombre} - ${producto.precio}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaProductos;
