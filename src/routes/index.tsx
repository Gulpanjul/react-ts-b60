import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
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
