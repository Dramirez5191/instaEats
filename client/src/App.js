import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import { UserForm } from './components/UserForm';
import { ShowMealsPage } from './pages/ShowMealsPage';
import { AboutPage } from './pages/AboutPage';
import { LandingPage } from './pages/LandingPage';

class App extends React.Component {
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
