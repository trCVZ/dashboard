import { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";

// import "react-pro-sidebar/dist/css/styles.css";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "@mui/material";
import { tokens } from "../../theme";

import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import CalendarOutlined from "@mui/icons-material/CalendarTodayOutlined";
import ReceiptOutlined from "@mui/icons-material/ReceiptOutlined";
import HelpOutlined from "@mui/icons-material/HelpOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PieChartOutlined from "@mui/icons-material/PieChartOutlined";
import TimelineOutlined from "@mui/icons-material/TimelineOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <div>SideBar</div>;
}

export default SideBar;
