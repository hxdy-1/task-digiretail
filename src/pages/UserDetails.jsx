import {
	useParams,
	useLoaderData,
	Link,
	redirect,
	Form,
} from "react-router-dom";
import Card from "../UI/Card";
import styles from "../components/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function UserDetailsPage() {
	const params = useParams();
	const data = useLoaderData();

	// const deleteUserHandler = () => {
	// 	const proceed = window.confirm(
	// 		"Are you sure you wanna delete this user?"
	// 	);

	// 	let deletedUsersArr;

	// 	const existingDeletedUsersArr = JSON.parse(
	// 		localStorage.getItem("deletedUsers")
	// 	);

	// 	if (existingDeletedUsersArr) {
	// 		existingDeletedUsersArr.push(data.id);
	// 		deletedUsersArr = existingDeletedUsersArr;
	// 	} else {
	// 		deletedUsersArr = [];
	// 		deletedUsersArr.push(data.id);
	// 	}

	// 	if (proceed) {
	// 		localStorage.setItem(
	// 			"deletedUsers",
	// 			JSON.stringify(deletedUsersArr)
	// 		);

	// 		return redirect("/");
	// 	}
	// };

	return (
		<main>
			<Card>
				{/* <h1>{data.username}</h1>
				<h2>{data.id}</h2>
				<i>{data.phone}</i>
				<p>{data.email}</p>
				<a href="#">{data.website}</a> */}
				<h2 className={styles.username}>{data.username}</h2>
				<p>works at: {data.company.name}</p>
				<p>phone: {data.phone}</p>
				<p className={styles["general-text"]}>
					<a href="mailto:{data.email}" style={{ display: "block" }}>
						<span className={styles.email}>Email: </span>
						{data.email}
					</a>
				</p>
				<p className={styles["general-text"]}>
					<a href="#" style={{ display: "block" }}>
						{data.website}
					</a>
				</p>
				<Form method="POST">
					<button type="submit" className={styles["delete-btn"]}>
						<FontAwesomeIcon icon={faTrashCan} />
					</button>
				</Form>
			</Card>
		</main>
	);
}

export default UserDetailsPage;

export async function loader({ params }) {
	const id = params.userId;

	const response = await fetch(
		"https://jsonplaceholder.typicode.com/users/" + id
	);

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch user details." },
			{
				status: 500,
			}
		);
	} else {
		const resData = await response.json();
		// console.log(resData);
		return resData;
	}
}

export async function action({ params }) {
	const id = params.userId;
	// console.log(id);

	const proceed = window.confirm("Are you sure you wanna delete this user?");

	let deletedUsersArr;

	const existingDeletedUsersArr = JSON.parse(
		localStorage.getItem("deletedUsers")
	);

	if (existingDeletedUsersArr) {
		existingDeletedUsersArr.push(+id);
		deletedUsersArr = existingDeletedUsersArr;
	} else {
		deletedUsersArr = [];
		deletedUsersArr.push(+id);
	}

	if (proceed) {
		localStorage.setItem("deletedUsers", JSON.stringify(deletedUsersArr));

		return redirect("/");
	}
}
