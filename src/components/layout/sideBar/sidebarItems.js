import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";
import WebIcon from "@mui/icons-material/Web";

const sidebarMenue = [
  { title: "صفحه اصلی", icon: <HomeIcon fontSize="medium" />, link: "/" },
  {
    title: "دسته بندی‌ها",
    icon: <CategoryIcon fontSize="medium" />,
    child: true,
  },
  { title: "ورود به حساب کاربری", icon: <AccountBoxIcon fontSize="medium" /> },
  { title: "پشتیبانی", icon: <HeadsetMicIcon fontSize="medium" /> },
  { title: "فرصت های شغلی", icon: <BusinessCenterIcon fontSize="medium" /> },
  { title: "باشگاه مشتریان ", icon: <GroupsIcon fontSize="medium" /> },
  { title: "درباره ما ", icon: <InfoIcon fontSize="medium" /> },
  { title: " وبگاه ", icon: <WebIcon fontSize="medium" /> },
];

export default sidebarMenue