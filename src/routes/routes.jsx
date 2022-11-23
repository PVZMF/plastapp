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
import OrdersPage from "../pages/profile/ordersPage";
import ChequePage from "../pages/cheque";
import SideBar from "../components/sideBar/sideBar"
import ClubPage from "../pages/club";
import DetailProductPage from "../pages/products/detailProduct";
import BlogPage from "../pages/blog";
import DetailBlogPage from "../pages/blog/detailBlog";
import Career_Opportunity_Page from "../pages/career_Opportunity";

// import login from "../pages/login/loginForm";
import StoreRegistration from "../pages/StoreRegistration";
import CreditPurches from '../pages/CreditPurches';
import OrderPlace from "../pages/OrderPlace";
import RulesConditon from "../pages/rule"

import Login from "../pages/login/Login"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children :[
          {
            path:"/login",
            element: <Login/>
         },
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/product/:id",
            element: <DetailProductPage />,
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
                  element: <OrdersPage />,
              },
              {
                path: "/profile/storregiser",
                  index: true,
                  element: <StoreRegisterPage />,
              },
            ]
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
          },
          {
            path: "cheque",
            element: <ChequePage/>
          },
          {
            path: "AllProduct",
            element: <SideBar />
          },
          {
            path: "club",
            element: <ClubPage />
          },
          {
            path: "blog",
            element: <BlogPage />
          },
          {
            path: "blog/:id",
            element: <DetailBlogPage />
          },
          {
            path: "career_opportunity",
            element: <Career_Opportunity_Page />
          },
          
        ]
    },
    
]);

export default Router