import React from "react";
import Header from "../Share_Component/Header";
import Footer from "../Share_Component/Footer";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <div>
          <h5>Q:what is cors?</h5>
          <p>
            Ans:Cross-origin resource sharing (CORS) is a browser mechanism
            which enables controlled access to resources located outside of a
            given domain. It extends and adds flexibility to the same-origin
            policy (SOP). However, it also provides potential for cross-domain
            attacks, if a website's CORS policy is poorly configured and
            implemented. CORS is not a protection against cross-origin attacks
            such as cross-site request forgery (CSRF).
          </p>
        </div>
        <div>
          <h5>
            Q:Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p>
            Ans:Firebase Authentication provides backend services, easy-to-use
            SDKs, and ready-made UI libraries to authenticate users to your app.
            It supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. .
          </p>
        </div>
        <div>
          <h5>Q:How does the private route work?</h5>
          <p>
            Ans:The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </p>
        </div>
        <div>
          <h5>Q:What is Node? How does Node work?</h5>
          <p>
            Ans:Node. js (Node) is an open source, cross-platform runtime
            environment for executing JavaScript code. Node is used extensively
            for server-side programming, making it possible for developers to
            use JavaScript for client-side and server-side code without needing
            to learn an additional language..
          </p>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
