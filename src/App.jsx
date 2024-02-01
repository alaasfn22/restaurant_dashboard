import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import DashLayout from "./components/templates/DashLayout";
import NavLayout from "./components/templates/NavLayout";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "",
    element: <DashLayout />,
    children: [
      {
        path: "/",
        element: <NavLayout />,
        children: [
          {
            path: "/",
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <p>Error</p>,
    errorElement: <p>Errosssssssssr</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
