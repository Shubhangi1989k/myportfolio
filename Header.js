import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
      color:"#fff"
    };
    return (
      <div className="header">
          <Navbar expand="lg"fixed="top">
          <Container>
      <Navbar.Brand>Shubhangi Kale</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"> 
      <Nav className="ml-auto">
      
        <NavLink to="/" 
           style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="nav-link">Home</NavLink>
        <NavLink to="/about"
         style={({ isActive }) => (isActive ? activeStyle : undefined)}
         className="nav-link">About</NavLink>
        <NavLink to="/projects"
          style={({ isActive }) => (isActive ? activeStyle : undefined)} 
          className="nav-link">Projects</NavLink>
        
        <NavLink to="/contact"
           style={({ isActive }) => (isActive ? activeStyle : undefined)}
           className="nav-link">Contact</NavLink>
         <NavLink to="/resume"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="nav-link">Resume</NavLink>
     </Nav>
     </Navbar.Collapse>
     </Container>
     
    </Navbar>
    
    </div>
    
    );
};

export default Header;