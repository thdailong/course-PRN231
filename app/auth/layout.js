"use client";
import UserNavBar from "@/app/components/UserPage/NavBar";
import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
	return (
		<Box>
			<UserNavBar />
			{children}
		</Box>
	);
};

export default Layout;