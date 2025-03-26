import { useContext, useState } from "react";
import "../assets/styles/form-style.css";
import { AuthContext } from "../contexts/auth";

interface MyFormState {
	username: string;
	email: string;
	phone: string;
}

function MyForm() {
	const { user, setUser } = useContext(AuthContext);
	const [formState, setFormState] = useState<MyFormState>({
		username: "username not found",
		email: "",
		phone: "",
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.name, event.target.value);
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		console.log(`Halo username saya: ${formState.username}`);
		setUser(formState); // object yang berisi data form : username, email, phone
	};

	return (
		<form className="my-form" onSubmit={handleSubmit}>
			<input
				className="form-input"
				type="text"
				name="username"
				id="username"
				onChange={handleChange}
				placeholder="masukkan username..."
			/>
			<input
				className="form-input"
				type="text"
				name="email"
				id="email"
				onChange={handleChange}
				placeholder="masukkan email..."
			/>
			<input
				className="form-input"
				type="tel"
				name="phone"
				id="phone"
				onChange={handleChange}
				placeholder="masukkan nomor ponsel..."
			/>
			<button className="form-button" type="submit">
				Submit
			</button>
		</form>
	);
}

export default MyForm;
