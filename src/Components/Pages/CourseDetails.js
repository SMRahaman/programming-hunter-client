import { Link, useLoaderData } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const CourseDetails = () => {
  const Coursedetail = useLoaderData();
  return (
    <div className="my-5">
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
                <span className="text-danger fs-4"> {Coursedetail.title}</span>
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
  );
};

export default CourseDetails;
