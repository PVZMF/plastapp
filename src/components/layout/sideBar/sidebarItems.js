import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";


function sidebarItems(rule,isLogin) {
  return [
    { title: "صفحه اصلی", icon: <HomeIcon fontSize="large" />, link: "/", show:true},
    {
      title: "دسته بندی‌ها",
      icon: <CategoryIcon fontSize="large" />,
      onClick: () => {},
      show:true,
      children: [
        { label: "محصولات نایلون و نایلکس", icon: "" },
        { label: " محصولات سلولزی", icon: "", link: "/", onClick: () => {} },
        {
          label: "محصولات یک بار مصرف",
          icon: "",
          link: "/",
          onClick: () => {},
        },
        {
          label: "محصولات خانه و آشپزخانه",
          icon: "",
          link: "/",
          onClick: () => {},
        },
        {
          label: "محصولات بهداشت و حمام",
          icon: "",
          link: "/",
          onClick: () => {},
        },
        { label: "سفارشات چایی ", icon: "", link: "/", onClick: () => {} },
        { label: "مواد اولیه ", icon: "", link: "/", onClick: () => {} },
        {
          label: "تجهیزات و دستگاه خط تولید  ",
          icon: "",
          link: "/",
          onClick: () => {},
        },
      ],
    },
    {
      title: "پشتیبانی",
      icon: <HeadsetMicIcon fontSize="large" />,
      onClick: () => {},
      show:true,
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
      show:true,
    },
    {
      title: "ارسال چک",
      icon: <BusinessCenterIcon fontSize="large" />,
      link: "/cheque",
      onClick: () => {},
      show:!rule && isLogin,
    },
    {
      title: "باشگاه مشتریان ",
      icon: <GroupsIcon fontSize="large" />,
      link: "/",
      onClick: () => {},
      show:!rule && isLogin
    },
    {
      title: "افزودن محصول",
      icon: <GroupsIcon fontSize="large" />,
      link: "/profile/addproduct",
      onClick: () => {},
      show: rule && isLogin
    },
    {
      title: "درباره ما ",
      icon: <InfoIcon fontSize="large" />,
      link: "/aboutus",
      onClick: () => {},
      show:true
    },
    {
      title: " وبگاه ",
      icon: <WebIcon fontSize="large" />,
      link: "/blog",
      onClick: () => {},
      show:true
    },
  ];
}

export default sidebarItems;
