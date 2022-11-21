import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";

const sidebarMenue = [
  { title: "صفحه اصلی", icon: <HomeIcon fontSize="large" />, link: "/" },
  {
    title: "دسته بندی‌ها",
    icon: <CategoryIcon fontSize="large" />,
    children: [{ label: "محصولات نایلون و نایلکس", icon: "" },
    { label: " محصولات سلولزی", icon: "",link: "/" },
    { label: "محصولات یک بار مصرف", icon: "",link: "/" },
    { label: "محصولات خانه و آشپزخانه", icon: "",link: "/"},
    { label: "محصولات بهداشت و حمام", icon: "",link: "/" },
    { label: "سفارشات چایی ", icon: "",link: "/" },
    { label: "مواد اولیه ", icon: "",link: "/" },
    { label: "تجهیزات و دستگاه خط تولید  ", icon: "",link: "/" },

    ]

  },
  { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="large"/>, link: "/"  },
  {
    title: "پشتیبانی", icon: <HeadsetMicIcon fontSize="large" />,
  children: [
    { label: "تماس با پشتیبانی", icon: "",link: "/support" },
    { label: "ارسال تیکت", icon: "",link: "/support/newticket" },
    { label: "تیکت های من" , icon: "",link: "/support/ticketsList" },
,
]},
  { title: "فرصت های شغلی", icon: <BusinessCenterIcon fontSize="large"/>,link: "/"  },
  { title: "باشگاه مشتریان ", icon: <GroupsIcon fontSize="large" />,link: "/" },
  { title: "درباره ما ", icon: <InfoIcon fontSize="large" />,link: "/aboutus" },
  { title: " وبگاه ", icon: <WebIcon fontSize="large"/>,link: "/"  },
];

export default sidebarMenue