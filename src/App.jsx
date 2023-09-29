import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import UserDetails from "./pages/UserDetails";
import RootPage from "./pages/RootPage";
import { loader as allUserDetailsLoader } from "./pages/HomePage";
import {
	loader as UserDetailsLoader,
	action as deleteUserAction,
} from "./pages/UserDetails";
import { action as addUserAction } from "./components/Form";
import ErrorPage from "./pages/ErrorPage";
import NewUserPage from "./pages/NewUserPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader: allUserDetailsLoader,
				id: "home",
			},
			{
				path: ":userId",
				element: <UserDetails />,
				loader: UserDetailsLoader,
				action: deleteUserAction,
			},
		],
	},
	{
		path: "/newUser",
		element: <NewUserPage />,
		action: addUserAction,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
