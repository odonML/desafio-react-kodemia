import "antd/dist/antd.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DetailPostContainer from "./components/DetailPostContainer/index";
import "./index.css";
import CreatePost from "./pages/CreatePost/index";
import DetailPost from "./pages/DetailPost/index";
import Home from "./pages/Home/index";
import UpdatePost from "./pages/UpstePost/idenx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<h1>NOT FOUND</h1>} />
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="create" element={<CreatePost />} />
					<Route path=":postID" element={<DetailPostContainer />}>
						<Route index element={<DetailPost />} />
						<Route path="update" element={<UpdatePost />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
