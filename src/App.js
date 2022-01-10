import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="w-full flex flex-col items-center ">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
