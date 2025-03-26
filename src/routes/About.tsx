import { NavLink } from "react-router-dom";

function About() {
	return (
		<main
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<p>This is about page</p>
         <NavLink to="/">Ke Halaman Home</NavLink>
		</main>
	);
}

export default About;
