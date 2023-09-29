import FormNewUser from "../components/Form";

function NewUserPage() {
	return (
		<>
			<h1 style={{ textAlign: "center", marginTop: "2rem" }}>
				Add new user
			</h1>
			<FormNewUser />
		</>
	);
}

export default NewUserPage;
