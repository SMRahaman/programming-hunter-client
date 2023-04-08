import React from "react";
import Header from "../Share_Component/Header";
import Footer from "../Share_Component/Footer";
import { Button, Card, Form } from "react-bootstrap";
import { useContext } from "react";
import { userContext } from "../Share_Component/AuthContext/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useContext(userContext);
  const resetHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("Verify your email");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <Header></Header>
      <div className="login_form">
        <Card className="shadow px-4 card-form">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h3 className="fw-bold my-3 text-center text-uppercase ">
                Login
              </h3>
              <div className="mb-3">
                <Form onSubmit={resetHandler}>
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
                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="my-2">
                      Reset pssword
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ResetPassword;
