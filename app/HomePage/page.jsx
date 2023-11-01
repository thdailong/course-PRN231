"use client"
import { Box, Container, CssBaseline } from "@mui/material";
import TitleHome from "./TitleHomePage/TitleHome";
import ProductNav from "./FamousProduct/pages/page";
import AboutUs from "./AboutUs/page";

function page() {
  return (
    <Box sx={{userSelect: "none" }}>
      <TitleHome />
      <ProductNav/>
      <AboutUs/>
    </Box>
  );
}



export default page;
