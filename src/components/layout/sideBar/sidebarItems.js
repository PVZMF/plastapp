import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";

const sidebarMenue = [
  { title: "صفحه اصلی", icon: <HomeIcon fontSize="inherit" />, link: "/" },
  {
    title: "دسته بندی‌ها",
    icon: <CategoryIcon fontSize="inherit" />,
    child: true,
  },
  { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="inherit" /> },
  { title: "پشتیبانی", icon: <HeadsetMicIcon fontSize="inherit" /> },
  { title: "فرصت های شغلی", icon: <BusinessCenterIcon fontSize="inherit" /> },
  { title: "باشگاه مشتریان ", icon: <GroupsIcon fontSize="inherit" /> },
  { title: "درباره ما ", icon: <InfoIcon fontSize="inherit" /> },
  { title: " وبگاه ", icon: <WebIcon fontSize="inherit" /> },
];

export default sidebarMenue