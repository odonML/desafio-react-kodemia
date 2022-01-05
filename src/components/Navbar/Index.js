import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<Row>
			<Col span={12}>
				<Link to="/">Home</Link>
			</Col>
			<Col span={12}>
				<Link to="/create">Create</Link>
			</Col>
		</Row>
	);
}

export default Navbar;
