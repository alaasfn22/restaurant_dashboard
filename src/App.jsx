import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import DashLayout from "./components/templates/DashLayout";
import NavLayout from "./components/templates/NavLayout";
import Restaurant from "./components/pages/Restaurant";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";

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
            element: <Home />,
          },
          {
            path: "/restuarants",
            element: <Restaurant />,
          },
          {
            path: "/products",
            element: <Products />,
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
