import { RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import { AuthProvider } from "./contexts/auth";
// import Home from "./routes/Home";
import router from "./routes";

// component app
function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router}/>
		</AuthProvider>
	);
}

export default App;
