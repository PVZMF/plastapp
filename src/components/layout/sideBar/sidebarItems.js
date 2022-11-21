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
    children: [{ label: "محصولات نایلون و نایلکس", icon: ""},
                { label: " محصولات سلولزی", icon: ""},
                { label: "محصولات یک بار مصرف", icon: ""},
                { label: "محصولات خانه و آشپزخانه", icon: ""},
                { label: "محصولات بهداشت و حمام", icon: ""},
                { label: "سفارشات چایی ", icon: ""},
                { label: "مواد اولیه ", icon: ""},
                { label: "تجهیزات و دستگاه خط تولید  ", icon: ""},

  ]
    
  },
  { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="large" /> },
  { title: "پشتیبانی", icon: <HeadsetMicIcon fontSize="large" /> },
  { title: "فرصت های شغلی", icon: <BusinessCenterIcon fontSize="large" /> },
  { title: "باشگاه مشتریان ", icon: <GroupsIcon fontSize="large" /> },
  { title: "درباره ما ", icon: <InfoIcon fontSize="large" /> },
  { title: " وبگاه ", icon: <WebIcon fontSize="large" /> },
];

export default sidebarMenue