import React from 'react';
import { Link } from 'react-router-dom';
import magnifyglass_icon from './../../assets/icons/magnifyglass-icon.png';
import brush_icon from './../../assets/icons/brush-icon.png';
import './LoginScreen.css';
export const LoginScreen = () => {
  return (
    <div
      className='container'
    >
      <div className="row d-flex justify-content-center border-bottom-line">
        <div className="col-md-4">
          <h4 className="text-center">Iniciar <b>sesion</b></h4>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <label>Contrasena</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contrasena"
                autoComplete='off'
              />
            </div>
            <div className="form-group">
              <Link
                className="color"
                to="/search"
              >
                Olvide mi contrasena
              </Link>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-color">Entrar</button>
            </div>
          </form>
        </div>
      </div>

      <div className='row d-flex justify-content-center col-md-12'>
        <h4 className="text-center">Crear <b>Cuenta</b></h4>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className='d-flex justify-content-center'>
            <img
              src={magnifyglass_icon}
              alt=""
              width="100px"
              // height="10%"
              className="img-fluidp"
            />
          </div>
          <h4 className="text-center">Soy <b>coleccionista</b></h4>
          <p className='formato-texto'>Crea una cuenta para comprar y conocer las obras de diferentes artistas</p>
          <form>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <label>Tu Correo</label>
              <input
                type="email"
                className="form-control"
                placeholder="Tu Correo"
              />
            </div>
            <div className="form-group">
              <label>Contrasena</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contrasena"
                autoComplete='off'
              />
            </div>
            <div className="form-group">
              <label>Repetir Contrasena</label>
              <input
                type="password"
                className="form-control"
                placeholder="Repetir Contrasena"
                autoComplete='off'
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label"
              >
                Al registrarme, acepto las <Link className='color' to="/search">Politicas de la privacidad</Link> y los <Link className='color' to="/search">Terminos y Condiciones</Link>.

              </label>
            </div>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-color">Crear cuenta</button>
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <div className='d-flex justify-content-center'>
            <img
              src={brush_icon}
              alt=""
              width="100px"
              // height="10%"
              className="img-fluidp"
            />
          </div>
          <h4 className="text-center">Soy <b>artista</b></h4>
          <p className='formato-texto'>Crea una cuenta para comprar y conocer las obras de diferentes artistas</p>
          <form>
            <div className="form-group d-flex justify-content-center">
              <button type="submit" className="btn btn-color">Aplicar Ahora</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
