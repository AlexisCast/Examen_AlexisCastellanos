import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/Screens/LoginScreen";
// import { NavigationBar } from "../components/ui/NavigationBar";
import { NavigationBar } from "../components/ui/NavigationBar";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavigationBar/>
			<Routes>
				<Route path="/" element={
					<LoginScreen />
				}
				/>
				<Route path="/*" element={
					<LoginScreen />
				}
				/>
			</Routes>
		</BrowserRouter>
	);
};
