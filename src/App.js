import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Index";

function App() {
	return (
		<div className="grid grid-cols-12">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
