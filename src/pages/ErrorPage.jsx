import { useRouteError } from "react-router-dom";
import ErrorBlock from "../UI/ErrorBlock";
import Header from "../components/Header";

function ErrorPage() {
	const error = useRouteError();

	let title = "An error occurred";
	let message = "Something went wrong";

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = "Not found!";
		message = "Could not find resource or page:(";
	}
	return (
		<>
			<Header />
			<main>
				<ErrorBlock title={title} message={message} />
			</main>
		</>
	);
}

export default ErrorPage;
