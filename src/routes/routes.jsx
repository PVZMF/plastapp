import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout";

import Home from "../pages/home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children :[
          {
            index: true,
            element: <Home />,
          },
        ]
    }
]);

export default Router