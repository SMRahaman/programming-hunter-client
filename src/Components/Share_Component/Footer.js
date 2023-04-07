import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-primary text-white py-5 footer ">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div className="px-5 footer-detail">
              <h3 className="text-white">Programming Hunter</h3>
              <p className="text-white">
                This is platform for new and begineer programmer. We are hope
                that we always best leraring from here. Thank you
              </p>
            </div>
            <div className="px-5 social-icon">
              <FaFacebookF className="me-2 fs-6 fa "></FaFacebookF>
              <FaTwitter className="me-2 fs-6 tw "></FaTwitter>
              <FaLinkedin className="fs-6 li"></FaLinkedin>
            </div>
          </Col>
          <Col lg={2}>
            <div className="our_solution">
              <h5 className="text-white">Our solution</h5>
              <ul className="list-inline">
                <li>
                  <small>Programming solving</small>
                </li>
                <li>
                  <small>Web Design</small>
                </li>
                <li>
                  <small>Web Development</small>
                </li>
                <li>
                  <small>UI/UX Design</small>
                </li>
                <li>
                  <small>Algorithom</small>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="our_course">
              <h5 className="text-white">Our Course</h5>
              <ul className="list-inline">
                <li>
                  <small>C programming</small>
                </li>
                <li>
                  <small>C++ programming</small>
                </li>
                <li>
                  <small>Python programming</small>
                </li>
                <li>
                  <small>Java programming</small>
                </li>
                <li>
                  <small>Web programming</small>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="our_company">
              <h5 className="text-white">Our Company </h5>
              <ul className="list-inline">
                <li>
                  <small>Home</small>
                </li>
                <li>
                  <small>Course</small>
                </li>
                <li>
                  <small>FAQ</small>
                </li>
                <li>
                  <small>Blog</small>
                </li>
              </ul>
            </div>
          </Col>
          <div>
            <p className="text-center text-white mt-3 mb-0">
              Eshoshikhi &copy; 2023{" "}
              <span className="text-danger">Developmet by Maruf</span>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
