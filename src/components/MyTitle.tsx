interface TitleProps {
	title: string;
	color: string;
	subtitle?: string;
}

function JudulHalaman(props: TitleProps) {
	return (
		<div
			style={{
				paddingBottom: 40,
				backgroundColor: "#444",
			}}
		>
			<h1 style={{ color: props.color }}>{props.title}</h1>
			<h3>{props.subtitle}</h3>
		</div>
	);
}

export default JudulHalaman;
