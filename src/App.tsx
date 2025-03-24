import { useEffect, useState } from "react";
import "./assets/styles/App.css";
import UserList from "./components/UserList";

interface User {
	id: number;
	username: string;
	phone: string;
	email: string;
}

// component app
function App() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) =>
				setTimeout(() => {
					setUsers(data);
				}, 3000)
			);
	}, []);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{/* <MyCounter /> */}
			{/* <MyForm /> */}
			{users.length > 0 ? <UserList users={users} /> : <p>Loading...</p>}
		</div>
	);
}

export default App;
