import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Box, styled } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  const StyleComponent = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar position="sticky">
      <StyleComponent>
        <Typography variant="h5">Tours</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <NotificationsActiveIcon color="action" />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
      </StyleComponent>
    </AppBar>
  );
};

export default Navbar;
