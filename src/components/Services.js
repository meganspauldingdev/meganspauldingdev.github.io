import React, { Component } from 'react';
import brandingCover from '../img/branding-cover.jpg';
import webDesignCover from '../img/webdesign-cover.jpg';
import webDevelopmentCover from '../img/web-development-cover.jpg';

class Services extends Component {

	render() {
		return(
			<section id="services">
				<h3>SERVICES</h3>
				<hr/>
				<div className="service-container">
					<div className="service">
						<img src={brandingCover} alt="Branding"/>
						<h2>Branding</h2>
					</div>
					<div className="service">
						<img src={webDesignCover} alt="Web Design"/>
						<h2>Web Design</h2>
					</div>
					<div className="service">
						<img src={webDevelopmentCover} alt="Web Development"/>
						<h2>Web Development</h2>
					</div>
				</div>
			</section>
		)
	}

}

export default Services