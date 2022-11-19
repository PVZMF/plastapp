import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "../componets/layout";

// Pages
import Home from "../pages/home";
import TicketsList from "../pages/ticketsList";
import NewTicket from "../pages/newTicket";
import SupportPage from "../pages/support";
import Cart from "../pages/cart";

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
    },
    {
        path: "/ticketsList",
        element: <Layout />,
        children :[
          {
            index: true,
            element: <TicketsList />,
          },
        ]
    },
    {
        path: "/newticket",
        element: <Layout />,
        children :[
          {
            index: true,
            element: <NewTicket />,
          },
        ]
    },
    {
        path: "/support",
        element: <Layout />,
        children :[
          {
            index: true,
            element: <SupportPage />,
          },
        ]
    },
    {
        path: "/cart",
        element: <Layout />,
        children :[
          {
            index: true,
            element: <Cart />,
          },
        ]
    },
]);

export default Router