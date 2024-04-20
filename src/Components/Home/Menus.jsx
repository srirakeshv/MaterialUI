import React from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Typography from "@mui/material/Typography";

const Menus = () => {
  return (
    <Box
      flex={1}
      paddingY={2}
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <HomeIcon />
        <Typography variant="h6" color="initial">
          Home
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <ApartmentIcon />
        <Typography variant="h6" color="initial">
          Company
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <InfoIcon />
        <Typography variant="h6" color="initial">
          About
        </Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <MiscellaneousServicesIcon />
        <Typography variant="h6" color="initial">
          Services
        </Typography>
      </Box>
    </Box>
  );
};

export default Menus;
