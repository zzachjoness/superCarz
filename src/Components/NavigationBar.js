import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "../Style/navbar.css";
//import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
	const Navi = () => (
		<Navbar id="navbar-container" expand="lg">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand id="navbar-brand">SuperCarz</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto" id="navbar-links">
						<LinkContainer to="/cars">
							<Nav.Link id="navbar-link">Carz</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/brands">
							<Nav.Link id="navbar-link">Brandz</Nav.Link>
						</LinkContainer>
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
