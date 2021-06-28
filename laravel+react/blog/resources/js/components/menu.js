import React, { Component } from 'react'
import {Nav, Navbar} from "react-bootstrap";
import "../../css/style.css";

import {NavLink} from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <>
   
     <Navbar className="fixed-top navbar" variant="light" expand="lg">
                    <Navbar.Brand className="logo" href="#home">Md.Shanto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink  className="nav-font" to="/"  href="#home">Home</NavLink>
                            <NavLink className="nav-font"  to="/courseplan" href="#link">Course Plan</NavLink>
                            <NavLink className="nav-font"  to="/registration" href="#link">Registration</NavLink>
                            <NavLink className="nav-font" to="/freeclass"   href="#link">Free Class</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
           
      </>

    
    )
  }
}
