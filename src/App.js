import React from 'react';
import ListaProductos from './components/ListaProductos';
import FormularioProducto from './components/FormularioProducto';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-4">
      <h1>Tienda React</h1>
      <FormularioProducto />
      <hr />
      <ListaProductos />
    </div>
  );
}

export default App;
