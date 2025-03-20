interface TitleProps {
	title: string;
}

function JudulHalaman({ title }: TitleProps) {
	return (
		<h1 style={{ color: "#f00", paddingBottom: 40, backgroundColor: "#444" }}>
			{title}
		</h1>
	);
}

export default JudulHalaman;
