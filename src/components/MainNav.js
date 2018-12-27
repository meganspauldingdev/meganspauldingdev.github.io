import React, { Component } from 'react';

class MainNav extends Component {

	render() {
		return(
			<div id="main-nav" role="main">
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">ABOUT</a></li>
					<li><a href="#">PORTFOLIO</a></li>
					<li><a href="#">SERVICES</a></li>
					<li><a href="#">CONTACT</a></li>
				</ul>
			</div>
		)
	}

}

export default MainNav