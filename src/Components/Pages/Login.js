import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { BsGoogle, BsGithub } from "react-icons/bs";
import Footer from "../Share_Component/Footer";
import Header from "../Share_Component/Header";
import { userContext } from "../Share_Component/AuthContext/AuthContext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { login, signGoogle, signGithub } = useContext(userContext);

  const loginFormHanlder = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signinGooleHandler = () => {
    signGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signinGithubHandler = () => {
    signGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          navigate(from, { replace: true });
        }
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
                <Form onSubmit={loginFormHanlder}>
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
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="my-2">
                      Log In
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="text-center">Or, Login with</p>
                  <div className="d-flex flex-column gap-4 ">
                    <Button
                      variant="danger"
                      className="w-75 mx-auto"
                      onClick={signinGooleHandler}
                    >
                      <BsGoogle className="me-2"></BsGoogle>
                      Google
                    </Button>
                    <Button
                      variant="success"
                      className="w-75 mx-auto"
                      onClick={signinGithubHandler}
                    >
                      <BsGithub className="me-2"></BsGithub>
                      Github
                    </Button>
                    <div>
                      <p className="text-center">
                        I have no account.<Link to="/register">regiser</Link>
                      </p>
                    </div>
                  </div>
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

export default Login;
