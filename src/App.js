import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Context/Pages/Login";
import Registration from "./Context/Pages/Registration";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/login",
    element: <h1>login</h1>,
  },
  {
    path: "/Registration",
    element: <Registration></Registration>,
  },
]);
function App() {
  return <></>;
}

export default App;
