import React, { Component } from 'react';

class Services extends Component {

	render() {
		return(
			<section id="services">
				<h3>SERVICES</h3>
				<hr/>
				<div className="service-container">
					<div className="service brand-service">

						<h2>Branding</h2>
					</div>
					<div className="service web-design-service">
						<h2>Web Design</h2>
					</div>
					<div className="service web-dev-service">
						<h2>Web Development</h2>
					</div>
				</div>
			</section>
		)
	}

}

export default Services