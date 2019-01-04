import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Services extends Component {

	render() {
		return(
			<section id="services">
				<h3>SERVICES</h3>
				<hr/>
				<div className="service-container">

				<Link to="/branding">
					<div className="service brand-service">
							<h2>Branding</h2>
					</div>
				</Link>
				<Link to="webdesign">
					<div className="service web-design-service">
							<h2>Web Design</h2>
					</div>
				</Link>
				<Link to="webdevelopment">
				<div className="service web-dev-service">
						<h2>Web Development</h2>
				</div>
				</Link>
				</div>
			</section>
		)
	}

}

export default Services