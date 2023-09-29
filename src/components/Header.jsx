import styles from "./Header.module.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../AppContext";

function Header() {
	const { userId: id } = useParams();
	const { searchValue, setSearchValue } = useAppContext();
	const changeHandler = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<header className={styles.header}>
			{!id && (
				<nav>
					<h1>Users</h1>
					<div>
						<input
							type="text"
							placeholder="search by username"
							value={searchValue}
							onChange={changeHandler}
						/>
						<button>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
					<Link to="/newUser">
						<button>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</Link>
				</nav>
			)}
			{id && (
				<nav>
					<Link to="/">
						<h2>&larr; Back</h2>
					</Link>
				</nav>
			)}
		</header>
	);
}

export default Header;
