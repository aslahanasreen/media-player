import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {

  const nav = useNavigate()

  const lgout=()=>{
    nav('/')
    sessionStorage.removeItem("userData")
  }

  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-regular fa-circle-play fa-bounce" style={{color:'#e9f53d'}}></i>
            {' '}
            Media Player
          </Navbar.Brand>
        </Container>
        <button className='btn' onClick={lgout}>
        <i className="fa-solid fa-right-from-bracket fa-xl" style={{color: "#c31d25",}} />
        </button>
      </Navbar>
    </>
  )
}

export default Header