import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import DashLayout from "./components/templates/DashLayout";
import NavLayout from "./components/templates/NavLayout";
import Restaurant from "./components/pages/Restaurant";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import AuthProtected from "./components/templates/AuthProtected";
import AddedProductModel from "./components/organisms/AddedProductModel";
import ViewProductDetailsModel from "./components/organisms/View_Product_Details_Model";
import NotFound from "./components/pages/Not_Found";
import RestaurantDetailsPage from "./components/pages/Restaurant_Details_Page";

const router = createBrowserRouter([
  {
    path: "",
    element: <AuthProtected />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
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
            path: "/restuarants-details/",
            element: <RestaurantDetailsPage />,
          },
          {
            path: "/products",
            element: <Products />,
            children: [
              {
                path: "/products/add-product",
                element: <AddedProductModel />,
              },
              {
                path: "/products/product-details/",
                element: <ViewProductDetailsModel />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <p>Errosssssssssr</p>,
  },
]);

function App() {
  return (
    <div className="bg-whait dark:bg-dark">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
