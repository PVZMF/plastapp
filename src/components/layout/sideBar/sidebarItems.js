import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";
import { getCategories } from "../../../api/api";

function SidebarItems(auth, isLogin) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories()
      .then((res) => {
        const categoryWithAll=res
        categoryWithAll.unshift({title:"همه محصولات" , id:"all"})
        setCategory(categoryWithAll);
      })
      .catch((err) => {
       
      });
  }, []);
  return [
    {
      title: "صفحه اصلی",
      icon: <HomeIcon fontSize="large" />,
      link: "/",
      show: true,
    },
    {
      title: "دسته بندی‌ها",
      icon: <CategoryIcon fontSize="large" />,
      onClick: () => {},
      show: true,
      children: category.map((item, index) => {
        return { label: item.title, link: `/category/${item.id}/products` };
      }),
    },
    {
      title: "پشتیبانی",
      icon: <HeadsetMicIcon fontSize="large" />,
      onClick: () => {},
      show: true,
      children: [
        {
          label: "تماس با پشتیبانی",
          icon: "",
          link: "/support",
          onClick: () => {},
        },
        {
          label: "ارسال تیکت",
          icon: "",
          link: "/support/newticket",
          onClick: () => {},
        },
        {
          label: "تیکت های من",
          icon: "",
          link: "/support/ticketsList",
          onClick: () => {},
        },
        ,
      ],
    },
    {
      title: "فرصت های شغلی",
      icon: <BusinessCenterIcon fontSize="large" />,
      link: "/jobs",
      onClick: () => {},
      show: true,
    },
    {
      title: "ارسال چک",
      icon: <BusinessCenterIcon fontSize="large" />,
      link: "/cheque",
      onClick: () => {},
      show: auth.role !== "business" && isLogin,
    },
    {
      title: "باشگاه مشتریان ",
      icon: <GroupsIcon fontSize="large" />,
      link: "/",
      onClick: () => {},
      show: auth.role !== "business" && isLogin,
    },
    {
      title: "افزودن محصول",
      icon: <GroupsIcon fontSize="large" />,
      link: "/profile/addproduct",
      onClick: () => {},
      show: auth.role === "business" && isLogin,
    },
    {
      title: "درباره ما ",
      icon: <InfoIcon fontSize="large" />,
      link: "/aboutus",
      onClick: () => {},
      show: true,
    },
    {
      title: " وبگاه ",
      icon: <WebIcon fontSize="large" />,
      link: "/blog",
      onClick: () => {},
      show: true,
    },
  ];
}

export default SidebarItems;
