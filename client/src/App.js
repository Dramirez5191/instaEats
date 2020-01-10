import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

// import spoonacular from './api/spoonacular';

import { UserForm } from './components/UserForm';
import { ShowMealsPage } from './pages/ShowMealsPage';
import { AboutPage } from './pages/AboutPage';
import { LandingPage } from './pages/LandingPage';

class App extends React.Component {
	state = { exclude: null, recipes: [] };

	// onChoiceSelect = async (diet) => {
	// 	const KEY = '9cb84a72b42747bc88659dc94bb6782b';

	// 	const response = await spoonacular.get('/generate', {
	// 		params: {
	// 			apiKey: KEY,
	// 			diet: diet,
	// 			timeFrame: 'week'
	// 		}
	// 	});
	// 	this.setState({ recipes: response.data.items });
	// };

	render() {
		return (
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/meals" exact component={ShowMealsPage} />
					<Route path="/meals/new" component={UserForm} />
					<Route path="/about" component={AboutPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
