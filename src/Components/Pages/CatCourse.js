import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "./Courses";

const CatCourse = () => {
  const catcourse = useLoaderData();
  console.log(catcourse);
  return (
    <div>
      <div>
        <p className="text-end mt-3">Total Course:{catcourse.length}</p>
      </div>
      <div className="d-flex justify-content-center  gap-4 flex-wrap my-5">
        {catcourse.map((catcourse) => (
          <Courses catcourse={catcourse}></Courses>
        ))}
      </div>
    </div>
  );
};

export default CatCourse;
