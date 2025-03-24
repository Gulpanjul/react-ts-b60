import { useEffect, useState } from "react";

function MyCounter() {
	const [suhu, setSuhu] = useState<number>(27);
	const [background, setBackground] = useState<string>("mint");

	useEffect(() => {
		if (suhu > 25) {
			setBackground("yellow");
		} else if (suhu < 20) {
			setBackground("red");
		} else {
			setBackground("mint");
		}
	}, [suhu]);

	const tambah = () => {
		if (suhu < 30) {
			setSuhu(suhu + 1);
		} else {
			alert("tidak bisa lebih dari 30");
		}
	};

	const kurang = () => {
		if (suhu > 16) {
			setSuhu(suhu - 1);
		} else {
			alert("tidak bisa kurang dari 16");
		}
	};

	return (
		<div
			id="my-counter"
			style={{
				backgroundColor: background,
				height: "80vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1>{suhu}</h1>
			<button onClick={tambah}>Tambah</button>
			<br />
			<button onClick={kurang}>Kurang</button>
		</div>
	);
}

export default MyCounter;
