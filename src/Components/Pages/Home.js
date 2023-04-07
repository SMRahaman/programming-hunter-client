import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import icon1 from "../../assestes/icon1.svg";
import icon2 from "../../assestes/icon2.svg";
import icon3 from "../../assestes/icon3.svg";
import banner from "../../assestes/about3.png.webp";
import man1 from "../../assestes/man1.jpg";
import woman2 from "../../assestes/woman2.jpg";
import man2 from "../../assestes/man2.jpg";
import man3 from "../../assestes/man3.jpg";
import about2 from "../../assestes/about2.png.webp";
import { TiTick } from "react-icons/ti";
import { AiFillPlayCircle } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from "../Share_Component/Header";
import Footer from "../Share_Component/Footer";

const Home = () => {
  const expertslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="slider">
        <Container>
          <Row>
            <Col lg={7} sm={12}>
              <div className="hero-description">
                <h1 className="mb-4">Online learning platform</h1>
                <p className="mb-4">
                  Build skills with courses,certificates, and degrees online
                  from world-class universities and companies
                </p>
                <Button variant="success">Join free now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service-area z-3">
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <div className="card-section">
                <div className="card_image">
                  <img src={icon1} alt="" className="img-fluid" />
                </div>
                <div className="card-discription">
                  <h3>60+ UX Course</h3>
                  <p>The automated process all your website tasks</p>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="card-section">
                <div className="card_image">
                  <img src={icon2} alt="" className="img-fluid" />
                </div>
                <div className="card-discription">
                  <h3>60+ UX Course</h3>
                  <p>The automated process all your website tasks</p>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="card-section">
                <div className="card_image">
                  <img src={icon3} alt="" className="img-fluid" />
                </div>
                <div className="card-discription">
                  <h3>60+ UX Course</h3>
                  <p>The automated process all your website tasks</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="learn_new my-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={12}>
              <div className="px-5  ">
                <h2 className="section-title">
                  Learn new skills online with top educators
                </h2>
                <div className="font-text">
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                </div>
                <div className="single-fetures d-flex">
                  <div className="features-iocn me-2">
                    <TiTick className="text-success"></TiTick>
                  </div>
                  <div className="features-caption">
                    <p>
                      Techniques to engage effectively with vulnerable children
                      and young people
                    </p>
                  </div>
                </div>
                <div className="single-fetures d-flex">
                  <div className="features-iocn me-2">
                    <TiTick className="text-success"></TiTick>
                  </div>
                  <div className="features-caption">
                    <p>
                      Techniques to engage effectively with vulnerable children
                      and young people
                    </p>
                  </div>
                </div>
                <div className="single-fetures d-flex">
                  <div className="features-iocn me-2">
                    <TiTick className="text-success"></TiTick>
                  </div>
                  <div className="features-caption">
                    <p>
                      Techniques to engage effectively with vulnerable children
                      and young people
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} sm={12}>
              <div className="text-center d-none d-lg-block ">
                <AiFillPlayCircle
                  className="fs-1 text-success "
                  onClick={() => setLgShow(true)}
                ></AiFillPlayCircle>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="learn-outcomes my-5">
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <div>
                <img src={banner} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} sm={12} className="d-flex align-items-center">
              <div className="mt-5">
                <h2 className="px-5">
                  Learner outcomes on courses you will take
                </h2>
                <div className="single-fetures d-flex px-5">
                  <div className="features-iocn me-2">
                    <TiTick className="text-success"></TiTick>
                  </div>
                  <div className="features-caption">
                    <p>
                      Techniques to engage effectively with vulnerable children
                      and young people
                    </p>
                  </div>
                </div>
                <div className="single-fetures d-flex px-5">
                  <div className="features-iocn me-2">
                    <TiTick className="text-success"></TiTick>
                  </div>
                  <div className="features-caption">
                    <p>
                      Techniques to engage effectively with vulnerable children
                      and young people
                    </p>
                  </div>
                </div>
                <div className="single-fetures d-flex px-5">
                  <div className="features-iocn me-2">
                    <TiTick className="text-success"></TiTick>
                  </div>
                  <div className="features-caption">
                    <p>
                      Techniques to engage effectively with vulnerable children
                      and young people
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="comunity-expert my-5">
        <Container>
          <Row>
            <Col>
              <div>
                <h2 className="text-center mb-5"> Community experts </h2>
                <Slider {...expertslider} className="mx-5">
                  <div>
                    <div className="text-center">
                      <img
                        src={man1}
                        alt=""
                        className="rounded-circle members-img "
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Md.Maruf</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={woman2}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Mrs.Mithila</h5>
                      <p>Director</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={man2}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Md.shorif</h5>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={man3}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Md.Nazmul</h5>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={man1}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Md.Maruf</h5>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={woman2}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Mrs.Mithila</h5>
                      <p>Director</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={man2}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Md.Shorif</h5>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={man3}
                        alt=""
                        className="rounded-circle members-img border border-secondary"
                      />
                    </div>
                    <div className="text-center mx-3 mt-4">
                      <h5>Md.Nazmul</h5>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-2 my-5">
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <img src={about2} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <div className="px-5 mt-5">
                <h2>
                  Take the next step toward your personal and professional goals
                  with us.
                </h2>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
                <div className="d-none d-">
                  <Button variant="outline-success">Join free now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <div className="modal">
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h3 className="text-center my-3"> Welcome to Dhaka City</h3>
          </Modal.Title>
          <Modal.Body>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube-nocookie.com/embed/SZbNAi6dlY8?start=10"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
