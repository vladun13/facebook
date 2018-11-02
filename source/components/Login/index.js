//Core
import React, { Component } from 'react';

//Instruments
import Styles from './styles.m.css';
import { withProfile } from 'components/HOC/withProfile';
import { Link } from 'react-router-dom';

@withProfile
export default class Login extends Component {
	_logIn = () => {
		const { _logIn } = this.props;

		_logIn();
	}

	render() {
		return (
			<section className = { Styles.login }>
				<button onClick = { this._logIn }>Login</button>
			</section>	
		)
	}
}