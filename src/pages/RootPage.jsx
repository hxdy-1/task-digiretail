import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { AppContextProvider } from "../AppContext";

function RootPage() {
	return (
		<AppContextProvider>
			<Header />
			<Outlet />
		</AppContextProvider>
	);
}

export default RootPage;
