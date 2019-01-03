import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Services extends Component {

	render() {
		return(
			<section id="services">
				<h3>SERVICES</h3>
				<hr/>
				<div className="service-container">

				<div className="service brand-service">
					<Link to="/branding">
						<h2>Branding</h2>
					</Link>
				</div>

				<div className="service web-design-service">
					<Link to="webdesign">
						<h2>Web Design</h2>
						</Link>
				</div>
				<div className="service web-dev-service">
					<Link to="webdevelopment">
						<h2>Web Development</h2>
					</Link>
				</div>
				</div>
			</section>
		)
	}

}

export default Services