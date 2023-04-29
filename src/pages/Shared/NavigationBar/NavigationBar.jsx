import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import './NavigationBar.css';

const NavigationBar = () => {

  const { user, logOut } = useContext(AuthContext);  

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <Container>
      <Navbar
        className="mb-4 rounded-2"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fs-5">
                <Link className="nav-btn" to="/category/0">Home</Link>
                <Link className="nav-btn" to="/">About</Link>
                <Link className="nav-btn" to="/">Career</Link>            
            </Nav>
            <Nav className="d-flex gap-2 align-items-center">             
                {user ? (
                  <div className="d-flex align-items-center gap-3">
                    {
                      user.photoURL ?
                      <img style={{height: "35px", width: "35px", borderRadius: "50%"}} src={user.photoURL} alt="" /> :
                      <FaUserCircle className="fs-2"></FaUserCircle>
                    }
                    <Button onClick={handleLogOut} className="px-4" variant="secondary">
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button className="px-4" variant="secondary">
                      Login
                    </Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
