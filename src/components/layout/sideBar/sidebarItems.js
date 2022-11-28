import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";
import { useNavigate } from "react-router-dom";

function sidebarItems(isLogin) {
  return [
    { title: "صفحه اصلی", icon: <HomeIcon fontSize="large" />, link: "/" },
    {
      title: "دسته بندی‌ها",
      icon: <CategoryIcon fontSize="large" />,
      onClick: () => {},
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
    },
    {
      title: "باشگاه مشتریان ",
      icon: <GroupsIcon fontSize="large" />,
      link: "/",
      onClick: () => {},
    },
    {
      title: "درباره ما ",
      icon: <InfoIcon fontSize="large" />,
      link: "/aboutus",
      onClick: () => {},
    },
    {
      title: " وبگاه ",
      icon: <WebIcon fontSize="large" />,
      link: "/blog",
      onClick: () => {},
    },
  ];
}

export default sidebarItems;
