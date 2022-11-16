import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children :[
          {
            index:true,
          }
        ]
    }
]);

export default router