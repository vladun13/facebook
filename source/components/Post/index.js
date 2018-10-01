import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
	render () {
        const { 
            currentUserFirstName, 
            currentUserLastName,
            avatar } = this.props;


		return (
                <section className = { Styles.post }>
                    <img src= { avatar } alt=""/>
                    <a>{`${ currentUserFirstName} ${ currentUserLastName }`}</a>
                    <time>{moment().format('MMMM D h:mm:ss')}</time>
                    <p>Howdy!</p>
                </section>
		)
	}
}