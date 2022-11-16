import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "../componets/layout";

// Pages
import Home from "../pages/home";
import TicketsList from "../pages/ticketsList";
import NewTicket from "../pages/newTicket";

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
]);

export default Router