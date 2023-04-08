import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CatCourse from "./Pages/CatCourse";
import Course from "./Pages/Course";
import Home from "./Pages/Home";
import CourseDetails from "./Pages/CourseDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivateRoute from "./Pages/PrivateRoute";
import CheckOut from "./Pages/CheckOut";
import Blog from "./Pages/Blog";
import Error404 from "./Pages/Error404";
import ResetPassword from "./Pages/ResetPassword";

export const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/catcourses/:id",
        element: <CatCourse></CatCourse>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catcourse/${params.id}`),
      },

      {
        path: "/coursedetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coursedetails/${params.id}`),
      },

      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
    ],
  },

  { path: "/register", element: <Register></Register> },
  { path: "/login", element: <Login></Login> },
  { path: "/blog", element: <Blog></Blog> },
  { path: "/resetpass", element: <ResetPassword></ResetPassword> },
  { path: "*", element: <Error404></Error404> },
]);
