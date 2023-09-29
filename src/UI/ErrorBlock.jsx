import styles from "./ErrorBlock.module.css";

export default function ErrorBlock({ title, message }) {
	return (
		<div className={styles["error-block"]}>
			<div className={styles["error-block-icon"]}>!</div>
			<div className={styles["error-block-text"]}>
				<h2>{title}</h2>
				<p>{message}</p>
			</div>
		</div>
	);
}
