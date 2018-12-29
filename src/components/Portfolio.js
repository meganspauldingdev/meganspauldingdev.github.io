import React, { Component } from 'react';

class Portfolio extends Component {

	render() {
		return(
			<section id="portfolio">
				<h3>{this.props.sectionTitle}</h3>
				<hr/>
				<div class="service-container">
					<div class="service">1</div>
					<div class="service">2</div>
					<div class="service">3</div>
				</div>
			</section>
		)
	}

}

export default Portfolio