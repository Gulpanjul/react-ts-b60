import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

function UserData() {
	const { user, setUser } = useContext(AuthContext);
	return (
		<section>
			<h2>Logged in User</h2>
			<p>Username : {user.username}</p>
			<p>Phone : {user.phone}</p>
			<p>Email : {user.email}</p>
		</section>
	);
}

export default UserData;
