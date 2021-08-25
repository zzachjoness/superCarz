import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "../Style/navbar.css";
//import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
	const Navi = () => (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home" id="navbar-brand">
					SuperCarz
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto" id="navbar-links">
						<Nav.Link href="#gasoline" id="navbar-link">
							Gasoline
						</Nav.Link>
						<Nav.Link href="#electric" id="navbar-link">
							Electric
						</Nav.Link>
						<Nav.Link href="#hybrid" id="navbar-link">
							Hybrid
						</Nav.Link>
						<Nav.Link href="#brands" id="navbar-link">
							Brandz
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);

	return (
		<div>
			<Navi />
		</div>
	);
};

export default NavigationBar;
