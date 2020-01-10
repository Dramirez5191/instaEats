import React from 'react';

class SearchBar extends React.Component {
	state = { diet: '' };

	onInputChange = (e) => {
		this.setState({ diet: e.target.value });
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onChoiceSelect(this.state.diet);
	};
	render() {
		return (
			<div>
				<div className="search-bar ui segment">
					<form onSubmit={this.onFormSubmit} className="ui form">
						<div className="field">
							<label> Video Search</label>
							<input type="text" onChange={this.onInputChange} value={this.state.diet} />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
