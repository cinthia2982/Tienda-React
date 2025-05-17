import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

class FormularioProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      precio: '',
      imagen: '',
      mensaje: ''
    };
    this.validator = new SimpleReactValidator();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (this.validator.allValid()) {
      try {
        await addDoc(collection(db, "productos"), {
          nombre: this.state.nombre,
          precio: Number(this.state.precio),
          imagen: this.state.imagen
        });
        this.setState({ mensaje: 'Producto agregado correctamente', nombre: '', precio: '', imagen: '' });
        this.validator.hideMessages();
      } catch (error) {
        this.setState({ mensaje: 'Error al guardar el producto' });
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <h2>Agregar Producto</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
            {this.validator.message('nombre', this.state.nombre, 'required|alpha')}
          </div>

          <div className="mb-3">
            <label>Precio</label>
            <input
              type="number"
              name="precio"
              className="form-control"
              value={this.state.precio}
              onChange={this.handleChange}
            />
            {this.validator.message('precio', this.state.precio, 'required|numeric|min:1')}
          </div>

          <div className="mb-3">
            <label>URL Imagen</label>
            <input
              type="text"
              name="imagen"
              className="form-control"
              value={this.state.imagen}
              onChange={this.handleChange}
            />
            {this.validator.message('imagen', this.state.imagen, 'required|url')}
          </div>

          <button type="submit" className="btn btn-success">Guardar Producto</button>
        </form>
        <p className="mt-3">{this.state.mensaje}</p>
      </div>
    );
  }
}

export default FormularioProducto;
