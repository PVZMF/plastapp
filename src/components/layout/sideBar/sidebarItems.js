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
    child: true,
  },
  { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="large" /> },
  { title: "پشتیبانی", icon: <HeadsetMicIcon fontSize="large" /> },
  { title: "فرصت های شغلی", icon: <BusinessCenterIcon fontSize="large" /> },
  { title: "باشگاه مشتریان ", icon: <GroupsIcon fontSize="large" /> },
  { title: "درباره ما ", icon: <InfoIcon fontSize="large" /> },
  { title: " وبگاه ", icon: <WebIcon fontSize="large" /> },
];

export default sidebarMenue