"use client";
import { Box, Container } from "@mui/material";
import UserNavBar from "../components/UserPage/NavBar";

export default function Layout({ children }) {
  return (
      <Box>
        <UserNavBar/>
        {children}
      </Box>
  )
}