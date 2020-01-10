import React, { Component } from 'react';
import FormDietDetails from './FormDietDetails';
import FormRestrictionDetails from './FormRestrictionDetail';
import FormConfirmation from './FormConfirmation';

export class UserForm extends Component {
	state = {
		step: 1,
		diet: null,
		exclusion: null
	};

	//Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	//Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	//Handle fields change
	handleChange = (input) => (e) => {
		this.setState({
			[input]: e.target.value
		});
	};

	render() {
		const { step } = this.state;
		const { diet, exclusion } = this.state;
		const values = { diet, exclusion };

		switch (step) {
			case 1:
				return <FormDietDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return (
					<FormRestrictionDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return <FormConfirmation nextStep={this.nextStep} prevStep={this.prevStep} values={values} />;
			case 4:
				return <h1>Success</h1>;
		}
	}
}
