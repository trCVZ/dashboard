import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarktModeOutlined from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlined from "@mui/icons-material/LightModeOutlined";
import SettingsOutlined from "@mui/icons-material/LightModeOutlined";
import PersonOutlined from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
