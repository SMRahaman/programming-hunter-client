import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContexts from "./Components/Share_Component/ThemeContext/ThemeContext";
import AuthContext from "./Components/Share_Component/AuthContext/AuthContext";
import { Toaster } from "react-hot-toast";
import CourseDetails from "./Components/Pages/CourseDetails";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContexts>
      <AuthContext>
        <App />
        <Toaster />
      </AuthContext>
    </ThemeContexts>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
