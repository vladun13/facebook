import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import avatar from 'theme/assets/lisa';
import Styles from './styles.m.css';

export default class Post extends Component {
	render () {
		return (
                <section className = { Styles.post }>
                    <img src= { avatar } alt=""/>
                    <a>Lisa Simpson</a>
                    <time>{moment().format('MMMM D h:mm:ss')}</time>
                    <p>Howdy!</p>
                </section>
		)
	}
}