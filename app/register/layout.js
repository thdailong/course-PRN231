"use client";
import React from "react";
import { Box } from "@mui/material";
import RegisterAppBar from "@/app/components/RegisterPage/RegisterAppBar";

const Layout = ({ children }) => {
  return (
    <Box>
      <RegisterAppBar />
      {children}
    </Box>
  );
};

export default Layout;
