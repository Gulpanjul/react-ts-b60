import { NavLink } from "react-router-dom";
import MyCounter from "../components/MyCounter";
import MyForm from "../components/MyForm";
import UserData from "../components/UserData";

function Home() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<NavLink to="/about">Ke Halaman About</NavLink>
			<UserData />
			<MyCounter />
			<MyForm />
		</div>
	);
}

export default Home;
