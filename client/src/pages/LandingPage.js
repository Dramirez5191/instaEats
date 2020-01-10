import React, { Component } from 'react';
import styles from '../styles/LandingPage.css';
import eating from '../images/eating-together.svg';

import { Link } from 'react-router-dom';

export class LandingPage extends Component {
	render() {
		return (
			<div style={{ background: '#FAFAFA' }}>
				<div className="container">
					<div className="row">
						<div className=" col-sm-12 col-md-12 col-lg-6">
							<div className="text-container">
								<h1 className="heroText">
									Discover meals <br />based off your<br /> dietary interest
								</h1>
								<h2 className="heroSubText">Lorem Ipsum</h2>
								<Link to="/meals/new" className="btn goBtn">
									Lets go!
								</Link>
							</div>
						</div>
						<div className=" col-lg-6 d-none d-lg-block">
							<img className="image" src={eating} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;
