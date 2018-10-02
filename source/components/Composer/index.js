import React, { Component } from 'react';

// Instruments
import avatar from 'theme/assets/lisa';
import Styles from './styles.m.css';

//Components
import { Consumer } from 'components/HOC/withProfile';

export default class Composer extends Component {
	render () {
		return (
            <Consumer>
                {(context) => (
    				<section className = { Styles.composer }>
                        <img src={ context.avatar } alt=""/>
                        <form>
                            <textarea placeholder = { `What's on your mind, ${ context.currentUserFirstName }?` } />
                            <input type="submit" value = 'Post' />
                        </form>
                    </section>
                    )}
            </Consumer>
		)
	}
}