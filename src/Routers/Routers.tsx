import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import App from "../Pages/App";
import Manager from "../Pages/Manager";
import Client from "../Pages/Client";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h3>Page not found</h3>,
    children: [
      { index: true, element: <App /> },
      {
        path: "manager",
        element: <Manager />,
      },
      {
        path: "client",
        element: <Client />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
