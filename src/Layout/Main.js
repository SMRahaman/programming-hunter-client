import React, { createContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Components/Share_Component/Footer";
import Header from "../Components/Share_Component/Header";
import LeftSide from "../Components/Share_Component/LeftSide";
export const DetailContext = createContext({});
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={2} sm={12} className="d-none d-lg-block">
            <LeftSide></LeftSide>
          </Col>
          <Col lg={10} sm={12}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
