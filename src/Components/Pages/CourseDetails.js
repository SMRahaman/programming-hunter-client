import { Link, useLoaderData } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { createRef } from "react";
import ReactToPdf from "react-to-pdf";
const ref = createRef();
const CourseDetails = () => {
  const Coursedetail = useLoaderData();
  return (
    <div className="my-5">
      <div>
        <ReactToPdf
          targetRef={ref}
          filename="div-blue.pdf"
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }) => (
            <div className="text-end">
              <Button variant="success" className="mb-3 " onClick={toPdf}>
                Syllabus Download
              </Button>
            </div>
          )}
        </ReactToPdf>
      </div>
      <div ref={ref}>
        <Card>
          <div className="card_detail_image">
            <img src={Coursedetail.image_url} alt="" className="w-100 " />
          </div>
          <div className="card_info mt-5">
            <p className="text-success mb-0">
              Instructor name:{Coursedetail.instructor.name}
            </p>
            <p className="text-success mb-0">
              Ratig:{Coursedetail.rating.number}
            </p>
          </div>
          <Card.Body>
            <Card.Title>
              <div className="mb-4">
                <span>
                  Course Name:
                  <span className="text-danger fs-4">
                    {" "}
                    {Coursedetail.title}
                  </span>
                </span>
              </div>
            </Card.Title>
            <Card.Text>
              <h4 className="text-start">Course Details:</h4>
              <p className="text-start mb-3">{Coursedetail.details}</p>
            </Card.Text>
            <div className="text-center my-5">
              <Link to={`/checkout/${Coursedetail._id}`}>
                <Button variant="outline-danger" className="w-50">
                  Enrolled now
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetails;
