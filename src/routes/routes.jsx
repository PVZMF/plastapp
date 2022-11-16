import { createBrowserRouter } from "react-router-dom";
import Layout from "../componets/layout";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children :[
          {
            index:true,
            element: <Home />
          }
        ]
    }
]);

export default router