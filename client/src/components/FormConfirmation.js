import React, { Component } from 'react';
import style from '../styles/FormConfirmation.css';
export class FormConfirmation extends Component {
	continue = (e) => {
		e.preventDefault();
		//PROCESS FORM : SEND TO BACK-END
		// this.props.nextStep();

		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		// this.props.nextStep();

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
							<div class="ui middle aligned selection list listContainer">
								<div class="item">
									<div class="content">
										<div class="header">Diet:</div>
										{/* {diet ? <div>{diet}</div> : <div>Classic</div>} */}
										{diet}
									</div>
								</div>
								<div class="item">
									<div class="content">
										<div class="header">Exclusions:</div>
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
