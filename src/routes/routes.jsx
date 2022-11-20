import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "../componets/layout";

// Pages
import Home from "../pages/home";
import SupportPage from "../pages/support";
import Cart from "../pages/cart";
import ProfilePage from "../pages/profile";
import AddProductPage from "../pages/profile/addProduct";
import AboutUsPage from "../pages/aboutus";
import TicketsList from "../pages/support/ticketsList";
import NewTicket from "../pages/support/newTicket";
import TicketPage from "../pages/support/ticketsList/TicketPage";

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
            ]
          },
        ]
    },
    {
       
    },
]);

export default Router