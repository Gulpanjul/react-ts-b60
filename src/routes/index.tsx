import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Register from "./Register";
// import Login from "./Login";
// import Forgot from "./Forgot";
// import Reset from "./Reset";

let router = createBrowserRouter([
	{
		// halaman home
		path: "/",
		Component: Home,
	},
	{
		path: "/about",
		Component: About,
	},
]);

export default router;
