import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext2 } from "./ThemeContext/ThemeContext";
import { FaUserAlt } from "react-icons/fa";
import { userContext } from "./AuthContext/AuthContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import LeftSide from "./LeftSide";
const Header = () => {
  const { logout, user } = useContext(userContext);
  console.log(user);
  const { theme, toggleTheme } = useContext(ThemeContext2);
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginHanlder = () => {
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        expand="lg"
        bg="primary"
        variant="dark"
        className="shadow large-5"
      >
        <Container>
          <Navbar.Brand className="text-white fs-3 fw-bold">
            Programming Hunter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link>
                <Link className="text-white text-decoration-none" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white text-decoration-none" to="/course">
                  Course
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white text-decoration-none">FAQ</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white text-decoration-none" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="userimage"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={user?.displayName}
                  />
                ) : (
                  <FaUserAlt className="text-white"></FaUserAlt>
                )}
              </Nav.Link>
              <Nav.Link>
                {theme === "light" ? (
                  <MdDarkMode
                    className="fs-5 text-white"
                    onClick={toggleTheme}
                    checked={theme === "light"}
                  ></MdDarkMode>
                ) : (
                  <MdLightMode
                    className="fs-5 text-white"
                    onClick={toggleTheme}
                    checked={theme === "dark"}
                  ></MdLightMode>
                )}
              </Nav.Link>

              <Nav.Link>
                {user ? (
                  <Button variant="success" onClick={logoutHandler}>
                    Logout
                  </Button>
                ) : (
                  <Button variant="danger" onClick={loginHanlder}>
                    Login
                  </Button>
                )}
              </Nav.Link>
              <div className="d-lg-none">
                <LeftSide></LeftSide>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
