import React from "react";
import { Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const DetailInfo = useLoaderData();
  return (
    <div className="my-5">
      <div className="d-flex flex-column align-items-center">
        <h5>Course Name: {DetailInfo.title}</h5>
        <p>Course Fee: {DetailInfo.course_fee} Tk.</p>
      </div>
      <div className="text-center">
        <Button variant="primary">Checkout</Button>
      </div>
    </div>
  );
};

export default CheckOut;
