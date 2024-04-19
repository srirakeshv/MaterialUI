import React from "react";
import Navbar from "../Components/Common/Navbar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Menus from "../Components/Home/Menus";
import Content from "../Components/Home/Content";
import RightBar from "../Components/Home/RightBar";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl">
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Menus />
          <Content />
          <RightBar />
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
