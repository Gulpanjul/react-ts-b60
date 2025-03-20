import JudulHalaman from "./components/MyTitle";
import "./assets/styles/App.css";
import UserList from "./components/UserList";
import UserListDummy from "./utils/DummyList";

// component app
function App() {
	return (
		<div>
			<JudulHalaman title={"Belajar Typescript"} />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
				cupiditate voluptatum doloribus et numquam sunt, ab explicabo est, earum
				odio iure. Illum praesentium repudiandae provident.
			</p>

			<JudulHalaman title="Belajar React" />
			<a href="" target="_blank" rel="noopener noreferrer">
				contoh link
			</a>
			<MyButton />

      <UserList users={UserListDummy}/>
		</div>
	);
}

// component tombol/button
function MyButton() {
	return (
		<div style={{ marginTop: "20px" }}>
			<button type="button" onClick={() => alert("test button")}>
				Tombol Saya
			</button>
		</div>
	);
}

export default App;
