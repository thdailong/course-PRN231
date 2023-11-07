"use client";
import { Box } from "@mui/material";
import UserNavPage from '../components/UserNavPage/page';

const Layout = ({ children }) => {
	return (
		<Box>
			<UserNavPage />
			{children}
		</Box>
	);
};

export default Layout;