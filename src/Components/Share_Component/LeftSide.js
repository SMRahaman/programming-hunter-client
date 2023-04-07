import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-5">
      <p className="fs-5 cat-head">All Categories</p>
      {categories.map((category) => (
        <p key={category.id} className="text-start course-menu border-bottom">
          <Link
            className="text-success text-decoration-none "
            to={`/catcourses/${category.id}`}
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;
