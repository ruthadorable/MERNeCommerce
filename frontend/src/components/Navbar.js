import React from 'react'
import {Nav,Container,Button,Dropdown} from 'react-bootstrap'
const Navbar = () => {
    return (
        <div>
        <Container>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/">Sweet Ambition e-Shop</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav mr-auto">
          <li>
            <Nav.Link class="nav-link" href="/products">Products <i class="fas fa-birthday-cake"></i></Nav.Link>
          </li>
          <li>
            <Nav.Link class="nav-link" href="/pricing">Pricing <i class="fas fa-euro-sign"></i></Nav.Link>
          </li>
          <li>
            <Nav.Link class="nav-link" href="/about">About me</Nav.Link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          
          <li>
                <Nav.Link href="/signup" class="nav-link"> Sign Up</Nav.Link>
          </li>
          <li>
                <Nav.Link href="/cart" class="nav-link"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </li>
            
           <li>
                <Nav.Link href="/login" class=" nav-link"><i className="fas fa-user"></i> Login</Nav.Link>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  </Container>
        </div>
    )
}

export default Navbar
