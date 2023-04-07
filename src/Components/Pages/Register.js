import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Share_Component/Footer";
import Header from "../Share_Component/Header";
import { useContext } from "react";
import { userContext } from "../Share_Component/AuthContext/AuthContext";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const { register, updatePro } = useContext(userContext);
  const regFormHanlder = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setError("Password does not match");
    }
    register(email, password)
      .then((result) => {
        const user = result.user;
        updatePro(username, photourl);
        toast.success("Registration successfully");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(username, photourl, email, password, confirm_password);
  };
  return (
    <div>
      <Header></Header>
      <div className="register_form">
        <Card className="shadow px-4 card-form">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h3 className="fw-bold my-3 text-center text-uppercase ">
                Register Form
              </h3>
              <div className="mb-3">
                <Form onSubmit={regFormHanlder}>
                  <Form.Group className="mb-3" controlId="Name">
                    <Form.Label className="text-center">Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Name">
                    <Form.Label className="text-center">Photo URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="photourl"
                      placeholder="Enter Photo URL"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirm_password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <div className="d-grid ">
                    <Button variant="primary" type="submit" className="my-2">
                      Create Account
                    </Button>
                  </div>
                </Form>
                <div>{error}</div>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account??
                    <Link to="/login">Log In</Link>
                  </p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
