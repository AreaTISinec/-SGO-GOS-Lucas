import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'
//axios
import axios from 'axios'
//Bootstrap
import  Container  from 'react-bootstrap/Container'
import  Button  from 'react-bootstrap/Button'
import  Form  from 'react-bootstrap/Form'
import  Navbar  from 'react-bootstrap/Navbar'


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [registrationToggle, setRegistrationToggle] = useState()
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rol, setRol] = useState('admin')

  useEffect(()=> {
    client.get("/user")
    .then(function(res){
      setCurrentUser(true)
    })
    .catch(function(error){
      setCurrentUser(false)
    })

  },[])

  function update_form_btn(){
    if(registrationToggle){
      document.getElementById('form_btn').innerHTML = 'Register'
      setRegistrationToggle(false)
    }else{
      document.getElementById('form_btn').innerHTML = 'Log in'
      setRegistrationToggle(true)
    }
  }

  function submitRegistration(e){
    e.preventDefault()
    client.post(
      "/signup",
      {
        email: email,
        username: userName,
        password: password,
        rol: rol
      }
    )/*.then(function(res) {
      client.post(
        "/login",
        {
          email: email,
          password: password
        }
      )*/.then(function(res) {
        setCurrentUser(true)
      })
    }

  function submitLogin(e) {
    e.preventDefault()
    client.post(
      "/login",
      {
        email: email,
        password: password
      }).then(function(res) {
        setCurrentUser(true)
      }) 
  }

  function submitLogout(e){
    e.preventDefault()
    client.post(
      "/logout", { withCredentials: true})
      .then(function(res){
        setCurrentUser(false)
      })
      .catch(function(error){
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango 2xx
          console.error("Error de servidor:", error.response.data);
        } else if (error.request) {
          // La solicitud fue realizada, pero no se recibió respuesta
          console.error("No se recibió respuesta del servidor");
        } else {
          // Error durante la configuración de la solicitud
          console.error("Error de configuración de la solicitud:", error.message);
        }
      })
  }

  if(currentUser) {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Authentication App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <form onSubmit={e => submitLogout(e)}>
                  <Button type="submit" variant="light">Log out</Button>
                </form>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="center">
            <h2>Youre logged in! {email}</h2>
            <p>{email}</p>
          </div>
        </div>
    )
  }
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Authentication App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button id="form_btn" onClick={update_form_btn} variant="light">Register</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {
      registrationToggle ? (
        <div className="center">
          <Form onSubmit={e => submitRegistration(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={userName} onChange={e => setUserName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>rol</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={rol} onChange={e => setRol(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>        
      ) : (
        <div className="center">
          <Form onSubmit={e => {
            submitLogin(e)
            console.log(e)
            }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' onChange={e => {
                let mail = e.target.value
                setEmail(mail)
                }} />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password'  onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          
        </div>
      )
    }
    </div>
  );
}


export default App
