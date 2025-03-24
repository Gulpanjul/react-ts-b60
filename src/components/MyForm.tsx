import { useState } from "react";
import "../assets/styles/form-style.css";

interface MyFormState {
	username: string;
	age: number;
}

function MyForm() {
	const [formState, setFormState] = useState<MyFormState>({
		username: "username not found",
		age: 0,
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
		console.log(`Saya berumur ${formState.age} tahun`);
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
				type="number"
				name="age"
				id="age"
				onChange={handleChange}
				placeholder="masukkan umur..."
			/>
			<button className="form-button" type="submit">
				Submit
			</button>
		</form>
	);
}

export default MyForm;
