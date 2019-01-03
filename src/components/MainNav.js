import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MainNav extends Component {

	render() {
		return(
			<div id="main-nav" role="main">
				<ul>
					<li><Link to ="/">HOME</Link></li>
					<li><Link to="/about">ABOUT</Link></li>
					<li><Link to="/portfolio">PORTFOLIO</Link></li>
					<li><Link to="/services">SERVICES</Link></li>
					<li><Link to="/contact">CONTACT</Link></li>
				</ul>
			</div>
		)
	}

}

export default MainNav