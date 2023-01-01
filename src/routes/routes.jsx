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
import SideBar from "../components/sideBar/sideBar";
import ClubPage from "../pages/club";
import ProductsPage from "../pages/products";
import DetailProductPage from "../pages/products/detailProduct";
import BlogPage from "../pages/blog";
import DetailBlogPage from "../pages/blog/detailBlog";
import Career_Opportunity_Page from "../pages/career_Opportunity";

// import login from "../pages/login/loginForm";
import StoreRegistration from "../pages/StoreRegistration";
import CreditPurches from "../pages/CreditPurches";
import OrderPlace from "../pages/OrderPlace";
import RoleSelectPage from "../pages/register/RoleSelectPage";
import RulesConditon from "../pages/rule";
import Finances from "../pages/profile/finances";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

// const auth = useSelector(state => state.auth);
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id/products",
        element: <ProductsPage />,
      },
      {
        path: "/shop/:shopid/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
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
        element: <AboutUsPage />,
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
            path: "/profile/products/:id",
            element: <DetailProductPage />,
          },
          {
            path: "/profile/orders",
            index: true,
            element: <OrdersPage />,
          },
          {
            path: "/profile/finances",
            index: true,
            element: <Finances />,
          },
        ],
      },
      {
        path: "OrderPlace",
        element: <OrderPlace />,
      },
      {
        path: "cradite-purches",
        element: <CreditPurches />,
      },
      {
        path: "store-registration",
        element: <StoreRegistration />,
      },
      {
        path: "rule",
        element: <RulesConditon />,
      },
      {
        path: "cheque",
        element: <ChequePage />,
      },
      {
        path: "AllProduct",
        element: <SideBar />,
      },
      {
        path: "club",
        element: <ClubPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:id",
        element: <DetailBlogPage />,
      },
      {
        path: "jobs",
        element: <Career_Opportunity_Page />,
      },
    ],
  },
  {
    path: "/roleselect",
    element: <RoleSelectPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    children: [
      {
        path: "/profile/storregiser",
        index: true,
        element: <StoreRegisterPage />,
      },
    ],
  },
]);

export default Router;
