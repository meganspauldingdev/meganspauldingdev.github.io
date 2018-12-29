import React, { Component } from 'react';

class Portfolio extends Component {

	render() {
		return(
			<section id="portfolio">
				<h3>{this.props.sectionTitle}</h3>
				<hr/>
				<div className="service-container">
					<div className="service">1</div>
					<div className="service">2</div>
					<div className="service">3</div>
				</div>
			</section>
		)
	}

}

export default Portfolio