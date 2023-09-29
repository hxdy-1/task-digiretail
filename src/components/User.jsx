import { Link } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./User.module.css";

function User({ data }) {
	return (
		<Card>
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
			<p className={`${styles["general-text"]} ${styles["detail"]}`}>
				<Link to={`${data.id}`}>View full details &rarr;</Link>
			</p>
		</Card>
	);
}

export default User;
