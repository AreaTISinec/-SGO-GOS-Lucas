
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from "../actions/auth";

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;


  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  }

  //si esta autenticado
  //redirect a su pagina principal  
  return(
    <div className="container mt-5 ">
      <h1>Sign In</h1>
      <p>Ingresa a tu cuenta</p>
      <form onSubmit= {e => onSubmit(e)}>
        <div className="form-group mb-3">
          <input 
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          / >
        </div>
        <div className="form-group mb-3">
          <input 
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit" href='/'>Login</button>
      </form>
      <p className="mt-3">
        ¿No tienes cuenta? <Link to='/signup'> Registrate.</Link>
      </p>
      
    </div>
  )
};


export default connect(null, { login })(Login);
