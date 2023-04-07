import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Root";
import "./Style/Style.css";
import { useContext } from "react";
import { ThemeContext2 } from "./Components/Share_Component/ThemeContext/ThemeContext";
function App() {
  const { theme } = useContext(ThemeContext2);
  console.log(theme);
  return (
    <div className="" id={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
