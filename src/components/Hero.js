import React, { Component } from 'react';
import MSCLogo from '../img/logos/Logo.png';

class Hero extends Component {

	render() {
		return(
			<div id="hero">
				<h1>DESIGNS THAT CONVERT</h1>
				<img id="msc-logo" src={MSCLogo} alt="Megan Spaulding Creative"/>
			</div>
		)
	}

}

export default Hero