import { useAppContext } from "../AppContext";
import User from "../components/User";
import { useLoaderData, useNavigation, json } from "react-router-dom";

function HomePage() {
	const apiData = useLoaderData();
	console.log(apiData);
	const navigation = useNavigation();
	const { searchValue } = useAppContext();

	console.log(searchValue);

	let content;

	if (navigation.state !== "loading" && apiData) {
		const localStorageData =
			JSON.parse(localStorage.getItem("newUsers")) || [];

		const allUsersData = [...apiData, ...localStorageData];

		const deletedUsersId =
			JSON.parse(localStorage.getItem("deletedUsers")) || [];

		const dataBeforeSearch = allUsersData.filter(
			(userObj) => !deletedUsersId.includes(userObj.id)
		);

		const finalData = dataBeforeSearch.filter((user) =>
			user.username.toLowerCase().includes(searchValue.toLowerCase())
		);
		// console.log(finalData);

		content = (
			<ul>
				{finalData.map((user) => (
					<li key={user.id}>
						<User data={user} />
					</li>
				))}
			</ul>
		);

		if (finalData.length === 0) {
			content = (
				<h2 style={{ color: "red" }}>
					No users matched to your search query :(
				</h2>
			);
		}
	}

	return <main>{content}</main>;
}

export default HomePage;

export async function loader() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch events." },
			{
				status: 500,
			}
		);
	} else {
		const resData = await response.json();

		return resData;
	}
}
