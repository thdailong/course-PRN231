"use client";
import { Box } from "@mui/material";
import UserNavPage from "../components/UserNavPage/page";

export default function Layout({ children }) {
  return (
      <Box>
        {children}
      </Box>
  )
}