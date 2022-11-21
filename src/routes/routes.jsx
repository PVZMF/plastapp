import Support from "../pages/support"
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
// import login from "../pages/login/loginForm";
import StoreRegistration from "../pages/StoreRegistration";
import CreditPurches from '../pages/CreditPurches';
import OrderPlace from "../pages/OrderPlace";
import RulesConditon from "../pages/rule"
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children :[
          {
            index: true,
            element: <Home />,
          },
          {
            path: "login",
            element: <div>d</div>
          },
          {
            path: "OrderPlace",
            element: <OrderPlace/>
          },
          {
            path: "cradite-purches",
            element: <CreditPurches/>
          },
          {
            path: "about-us",
            element: <Support/>
          },
          {
            path: "store-registration",
            element: <StoreRegistration/>
          },
          {
            path: "Support",
            element: <Support/>
          },
          {
            path: "rule",
            element: <RulesConditon/>
          }
        ]
    }
]);

export default Router