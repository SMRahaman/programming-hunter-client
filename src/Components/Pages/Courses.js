import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
const Courses = ({ catcourse }) => {
  const {
    image_url,
    title,
    enrollStudent,
    rating,
    instructor,
    course_fee,
    _id,
  } = catcourse;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="mb-2">{title}</Card.Title>
          <span className="d-flex justify-content-between my-2">
            <span>
              <FaUserTie className="me-2"></FaUserTie>
              <small>Enrolled student: {enrollStudent}</small>
            </span>
            <span>
              <AiFillStar className="me-2"></AiFillStar>
              <small>Rating: {rating.number}</small>
            </span>
          </span>
          <span className="mb-2">
            <small className="fw-bold"> Instructor Name:</small>
            <small> {instructor.name}</small>
          </span>
          <br />
          <span>
            <small className="fw-bold"> Course-Time:</small>
            <small> {instructor.course_start}</small>
          </span>
          <span className="d-flex">
            <span className="me-2 fw-bold">Course fee:</span>
            <div className="d-flex">
              <span> {course_fee}</span>
              <p className="fw-bold">&#2547; </p>
            </div>
          </span>
          <div className="text-center">
            <Link to={`/coursedetails/${_id}`}>
              <Button variant="success" className="w-100">
                View details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
