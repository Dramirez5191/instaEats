import React, { Component } from 'react';

import { meals, mealInfo } from '../api/spoonacular';
import style from '../styles/FormConfirmation.css';

export class FormConfirmation extends Component {
	state = {
		recipes: []
	};
	//create a loading animation that stops when we reach the success page
	continue = async (e) => {
		e.preventDefault();
		const { values: { diet, exclusion } } = this.props;

		const KEY = '9cb84a72b42747bc88659dc94bb6782b';

		const response = await meals.get('/generate', {
			params: {
				apiKey: KEY,
				diet: diet,
				exclude: exclusion,
				timeFrame: 'week'
			}
		});
		// this.setState({ recipes: response.data.items });
		console.log(response.data.items[0].value.split(','));

		// const mealInfo = await mealInfo.get('/informationBulk',{
		// 		params:{
		// 			apiKey: KEY,
		// 			ids: this.state.recipes[0].
		// 		}
		// 	})

		// this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values: { diet, exclusion } } = this.props;

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="ui raised segment">
							<h1 className="confirmationHeader">Confirmation</h1>
							<div className="ui middle aligned selection list listContainer">
								<div className="item">
									<div className="content">
										<div className="header">Diet:</div>
										{diet ? <div>{diet}</div> : <div>Classic</div>}
										{/* {diet} */}
									</div>
								</div>
								<div className="item">
									<div className="content">
										<div className="header">Exclusions:</div>
										{exclusion ? <div>{exclusion}</div> : <div>none</div>}
									</div>
								</div>
								<div className="row">
									<div className="mx-auto button-container">
										<div className="col-lg-12">
											<button className="btn continueBtn" onClick={this.continue}>
												Confirm
											</button>
										</div>
										<div className="col-lg-12">
											<button className="btn previousBtn" onClick={this.back}>
												Back
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FormConfirmation;
