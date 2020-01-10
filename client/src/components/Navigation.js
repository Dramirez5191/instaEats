import React from 'react';

import { Navbar, Nav, NavItem, NavbarCollapse } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

const style = {
	Links: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '16px',
		letterSpacing: '0.05em',
		color: 'rgba(0, 0, 0, 0.75)',
		textDecoration: 'none',
		paddingTop: '3%',
		paddingBottom: '3%',
		lineHeight: '100%'
	}
};
const Navagation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="light">
			<Navbar.Brand>
				{/* <Link style={logoStyles} to="/"> */}
				<Link exact to="/">
					{/* <img src={Logo} /> */}
					LOGO
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link>
						<Link style={style.Links} to="/meals">
							My Plan
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link style={style.Links} to="/meals/new">
							Create a Meal Plan
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link style={style.Links} to="/about">
							About
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navagation;
