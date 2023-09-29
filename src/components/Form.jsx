import { Form, Link, redirect, useNavigation } from "react-router-dom";
import styles from "./Form.module.css";

function FormNewUser() {
	const navigate = useNavigation();

	const isSubmitting = navigate.state === "submitting";

	return (
		<Form method="POST" className={styles.form}>
			<div>
				<p>
					<label htmlFor="name">Name</label>
					<input id="name" type="text" name="name" required />
				</p>
				<p>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" name="username" required />
				</p>
			</div>
			<div>
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="text" name="email" required />
				</p>
				<p>
					<label htmlFor="phone">Phone</label>
					<input id="phone" type="text" name="phone" required />
				</p>
			</div>
			<div>
				<p>
					<label htmlFor="street">Street</label>
					<input id="street" type="text" name="street" required />
				</p>
				<p>
					<label htmlFor="suite">Suite</label>
					<input id="suite" type="text" name="suite" required />
				</p>
			</div>
			<div>
				<p>
					<label htmlFor="city">City</label>
					<input id="city" type="text" name="city" required />
				</p>
				<p>
					<label htmlFor="zipcode">Zipcode</label>
					<input id="zipcode" type="text" name="zipcode" required />
				</p>
			</div>
			<div>
				<p>
					<label htmlFor="website">Website</label>
					<input id="website" type="text" name="website" required />
				</p>
				<p>
					<label htmlFor="company">Company</label>
					<input id="company" type="text" name="company" required />
				</p>
			</div>
			<div className={styles.actions}>
				<Link to="/">
					<button type="button" disabled={isSubmitting}>
						Cancel
					</button>
				</Link>
				<button type="submit" disabled={isSubmitting}>
					{isSubmitting ? "Saving..." : "Add"}
				</button>
			</div>
		</Form>
	);
}

export default FormNewUser;

export const action = async ({ request, params }) => {
	const requestData = await request.formData();

	let uniqueId;

	const allUsersArr = JSON.parse(localStorage.getItem("newUsers"));

	if (allUsersArr) {
		uniqueId = +allUsersArr[allUsersArr.length - 1].id + 1;
	} else {
		uniqueId = 11;
	}

	const dataObj = {
		id: uniqueId,
		name: requestData.get("name"),
		username: requestData.get("username"),
		email: requestData.get("email"),
		address: {
			street: requestData.get("street"),
			suite: requestData.get("suite"),
			city: requestData.get("city"),
			zipcode: requestData.get("zipcode"),
		},
		phone: requestData.get("phone"),
		website: requestData.get("website"),
		company: {
			name: requestData.get("company"),
		},
	};

	console.log(dataObj);

	let newUsersArr;

	const parsedUsersArr = JSON.parse(localStorage.getItem("newUsers"));

	if (!parsedUsersArr) {
		newUsersArr = [];
	} else {
		newUsersArr = parsedUsersArr;
	}

	newUsersArr.push(dataObj);

	localStorage.setItem("newUsers", JSON.stringify(newUsersArr));

	return redirect("/");
};
