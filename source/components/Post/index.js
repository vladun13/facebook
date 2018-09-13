import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import avatar from 'theme/assets/lisa';

export default class Post extends Component {
	render () {
		return (
                <section>
                    <img src= { avatar } alt=""/>
                    <a>Lisa Simpson</a>
                    <time>{moment().format('MMMM D h:mm:ss')}</time>
                    <p>Howdy!</p>
                </section>
		)
	}
}