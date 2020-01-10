import React from 'react';
import Modal from 'react-modal';
import '../styles/DietDetailsStyles.css';
import thoughts from '../images/thoughts.svg';

class FormDietDetails extends React.Component {
	state = {
		KetoModal: false,
		PaleoModal: false,
		Whole30Modal: false
	};

	continue = (e) => {
		e.preventDefault();
		// this.props.nextStep();
		if (this.props.values.diet === null) {
			alert('please select a choice');
		} else {
			this.props.nextStep();
		}
	};
	onButtonClick = (e) => {
		e.preventDefault();
	};

	//Modal Triggers
	handleOpenKetogenicModal = () => {
		this.setState({ KetoModal: true });
	};

	handleCloseKetogenicModal = () => {
		this.setState({ KetoModal: false });
	};

	handleOpenPaleoModal = () => {
		this.setState({ PaleoModal: true });
	};

	handleClosePaleoModal = () => {
		this.setState({ PaleoModal: false });
	};

	handleOpenWhole30Modal = () => {
		this.setState({ Whole30Modal: true });
	};

	handleCloseWhole30Modal = () => {
		this.setState({ Whole30Modal: false });
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<React.Fragment>
				<div style={{ background: '#FAFAFA' }}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '10%' }}>
								<h1 className="Hero">
									HELLO<span style={{ color: '#38D39F' }}>,</span>
									<br />
									WHAT KIND OF DIET ARE YOU CURRENTLY ON?
								</h1>
								<p className="SubHero">Select your dietary interest</p>
								<button className="btn continueBtn" onClick={this.continue}>
									Continue
								</button>
							</div>

							<div
								className="col-sm-12 col-md-6 col-lg-6 item-list"
								style={{ backgroundColor: '#F5F5F5' }}
							>
								<div className="ui middle aligned divided animated list">
									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value=""
												onChange={handleChange('diet')}
												checked={values.diet === ''}
											/>
											<label>Classic</label>
											<div className="description">All you can eat</div>
										</div>
										<div />
									</div>
									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Gluten Free"
												onChange={handleChange('diet')}
												checked={values.diet === 'Gluten Free'}
											/>
											<label>Gluten Free</label>
											<div className="description">
												No wheat, barley, rye, and other gluten-containing foods
											</div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="right floated content">
											<button
												onClick={this.handleOpenKetogenicModal}
												className="circular ui icon button"
											>
												<i className="info circle icon" />
											</button>
										</div>
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Ketogenic"
												onChange={handleChange('diet')}
												checked={values.diet === 'Ketogenic'}
											/>
											<label>Ketogenic</label>
											<div className="description">Easy on the carbs</div>
										</div>
										<div />
									</div>
									<Modal
										isOpen={this.state.KetoModal}
										contentLabel="Modal #2 Global Style Override Example"
										onRequestClose={this.handleCloseKetogenicModal}
										className="Modal"
									>
										<div className="ui segment">
											<h2 className="ui horizontal divider enter aligned header">Keto Diet</h2>

											<h4 style={{ textAlign: 'center' }}>
												The keto diet is based more on the ratio of fat, protein, and carbs in
												the diet rather than specific ingredients. Generally speaking, high fat,
												protein-rich foods are acceptable and high carbohydrate foods are not.
											</h4>
											<button
												style={{ backgroundColor: '#38D39F' }}
												className=" fluid ui button"
												onClick={this.handleCloseKetogenicModal}
											>
												Got it
											</button>
										</div>
									</Modal>

									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Vegetarian"
												onChange={handleChange('diet')}
												checked={values.diet === 'Vegetarian'}
											/>
											<label>Vegetarian</label>
											<div className="description">No meat</div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Lacto-Vegetarian"
												onChange={handleChange('diet')}
												checked={values.diet === 'Lacto-Vegetarian'}
											/>
											<label>Lacto-Vegetarian</label>
											<div className="description">Vegetarian without the eggs</div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Ovo-Vegetarian"
												onChange={handleChange('diet')}
												checked={values.diet === 'Ovo-Vegetarian'}
											/>
											<label>Ovo-Vegetarian</label>
											<div className="description">Vegetarian without dairy</div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Vegan"
												onChange={handleChange('diet')}
												checked={values.diet === 'Vegan'}
											/>
											<label>Vegan</label>
											<div className="description">Only plants</div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Pescatarian"
												onChange={handleChange('diet')}
												checked={values.diet === 'Pescatarian'}
											/>
											<label>Pescetarian</label>
											<div className="description">Vegetarian + Seafood</div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="right floated content">
											<button
												onClick={this.handleOpenPaleoModal}
												className="circular ui icon button"
											>
												<i className="info circle icon" />
											</button>
										</div>
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Paleo"
												onChange={handleChange('diet')}
												checked={values.diet === 'Paleo'}
											/>
											<label>Paleo</label>
											<div className="description">Eat like a caveman</div>
										</div>
										<div />
									</div>

									<Modal
										isOpen={this.state.PaleoModal}
										contentLabel="Modal #2 Global Style Override Example"
										onRequestClose={this.handleClosePaleoModal}
										className="Modal"
									>
										<div className="ui segment">
											<h2 className="ui horizontal divider enter aligned header">Paleo Diet</h2>

											<h4 style={{ textAlign: 'center' }}>
												Allowed ingredients include meat (especially grass fed), fish, eggs,
												vegetables, some oils (e.g. coconut and olive oil), and in smaller
												quantities, fruit, nuts, and sweet potatoes. We also allow honey and
												maple syrup (popular in Paleo desserts, but strict Paleo followers may
												disagree). Ingredients not allowed include legumes (e.g. beans and
												lentils), grains, dairy, refined sugar, and processed foods.
											</h4>
											<button
												style={{ backgroundColor: '#38D39F' }}
												className=" fluid ui button"
												onClick={this.handleClosePaleoModal}
											>
												Got it
											</button>
										</div>
									</Modal>

									<div className="item">
										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Primal"
												onChange={handleChange('diet')}
												checked={values.diet === 'Primal'}
											/>
											<label>Primal</label>
											<div className="description">A caveman that likes dairy </div>
										</div>
										<div />
									</div>

									<div className="item">
										<div className="right floated content">
											<button
												onClick={this.handleOpenWhole30Modal}
												className="circular ui icon button"
											>
												<i className="info circle icon" />
											</button>
										</div>

										<div className="ui radio checkbox">
											<input
												type="radio"
												value="Whole30"
												onChange={handleChange('diet')}
												checked={values.diet === 'Whole30'}
											/>
											<label>Whole30</label>
											<div className="description">No soy, dairy, grains, legumes</div>
										</div>
										<div />
										<Modal
											isOpen={this.state.Whole30Modal}
											contentLabel="Modal #2 Global Style Override Example"
											onRequestClose={this.handleCloseWhole30Modal}
											className="Modal"
										>
											<div className="ui segment">
												<h2 className="ui horizontal divider enter aligned header">
													Whole30 Diet
												</h2>
												<h4 style={{ textAlign: 'center' }}>
													Allowed ingredients include meat, fish/seafood, eggs, vegetables,
													fresh fruit, coconut oil, olive oil, small amounts of dried fruit
													and nuts/seeds. Ingredients not allowed include added sweeteners
													(natural and artificial, except small amounts of fruit juice), dairy
													(except clarified butter or ghee), alcohol, grains, legumes (except
													green beans, sugar snap peas, and snow peas), and food additives,
													such as carrageenan, MSG, and sulfites.
												</h4>
												<button
													style={{ backgroundColor: '#38D39F' }}
													className=" fluid ui button"
													onClick={this.handleCloseWhole30Modal}
												>
													Got it
												</button>
											</div>
										</Modal>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default FormDietDetails;
