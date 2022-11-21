import Support from "../pages/support"
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";

import SupportPage from "../pages/support";
import Cart from "../pages/cart";
import ProfilePage from "../pages/profile";
import AddProductPage from "../pages/profile/addProduct";
import AboutUsPage from "../pages/aboutus";
import TicketsList from "../pages/support/ticketsList";
import NewTicket from "../pages/support/newTicket";
import TicketPage from "../pages/support/ticketsList/TicketPage";
import MyProductsPage from "../pages/profile/myProducts";
import StoreRegisterPage from "../pages/profile/storeRegister";

// import login from "../pages/login/loginForm";
import StoreRegistration from "../pages/StoreRegistration";
import CreditPurches from '../pages/CreditPurches';
import OrderPlace from "../pages/OrderPlace";
import RulesConditon from "../pages/rule"
import Detail_Product from "../pages/products/detail-product";

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
            path: "/product/:id",
            element: <Detail_Product />,
          },
          {
            path: "/support/ticketsList",
            element: <TicketsList />,
          },
          {
            path: "/support/ticketsList/:id",
            element: <TicketPage />,
          },
          {
            path: "/support/newticket",
            element: <NewTicket />,
          },
          {
            path: "/support",
            element: <SupportPage />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/aboutus",
            element: <AboutUsPage />
          },
          {
            path: "/profile",
            element: <ProfilePage />,
            children: [
              {
                path: "/profile/addproduct",
                  index: true,
                  element: <AddProductPage />,
              },
              {
                path: "/profile/myproducts",
                  index: true,
                  element: <MyProductsPage />,
              },
              {
                path: "/profile/orders",
                  index: true,
                  element: <h2>OrdersPage</h2>,
              },
              {
                path: "/profile/storregiser",
                  index: true,
                  element: <StoreRegisterPage />,
              },
            ]
          },
          {path: "login",
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
            path: "store-registration",
            element: <StoreRegistration/>
          },
          {
            path: "rule",
            element: <RulesConditon/>
          }
        ]
    },
    {
       
    },
]);

export default Router