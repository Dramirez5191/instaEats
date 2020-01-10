import React, { Component } from 'react';

import styles from '../styles/FormRestrictionDetail.css';

export class FormRestrictionDetail extends Component {
	state = { term: '' };
	continue = (e) => {
		e.preventDefault();
		// this.props.nextStep();
		if (this.props.values.diet === null) {
			alert('please select a choice');
		} else {
			this.props.nextStep();
		}
	};

	// as i type call the function
	back = (e) => {
		e.preventDefault();
		// this.props.nextStep();

		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;

		return (
			<div style={{ background: '#FAFAFA' }}>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-lg-12">
							<div className="hero">ANY ALLERGIES OR EXCLUSIONS?</div>
							<form>
								<div className="inputContainer">
									<input
										className="input"
										placeHolder="Shellfish, Olives, Peanuts"
										type="text"
										onChange={handleChange('exclusion')}
										defaultValue={values.exclusion}
									/>
								</div>
							</form>

							<div className="row">
								<div className="mx-auto button-container">
									<div className="col-lg-12">
										<button className="btn continueBtn" onClick={this.continue}>
											Continue
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
		);
	}
}

export default FormRestrictionDetail;
