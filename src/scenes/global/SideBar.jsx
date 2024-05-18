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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `&{colors.primary[400]}` !important,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px",
        },
        "& .pro-menu-item-hover": {
          color: "#868dfb",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa",
        },
      }}
    >
      <Menu>
        <MenuItem></MenuItem>
      </Menu>
      {!isCollapsed && (
        <Box
          mb="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={`../../assets/user.jpg`}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
          <Box textAlign="center">
            <Typography
              variant="h2"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              trCVZ
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
              Admin
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SideBar;
