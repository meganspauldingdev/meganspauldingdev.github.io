import React, { Component } from 'react';
import WorkSample from './WorkSample.js';

class Portfolio extends Component {

	render() {
		return(
			<section id="portfolio">
				<h3>{this.props.sectionTitle}</h3>
				<hr/>
				<div className="portfolio-container">
				    {

                  		this.props.showingSamples.map((sample, key) => (<WorkSample sample={sample} key={key} />))

                    }

				</div>
				<h4>See More</h4>
			</section>
		)
	}

}

export default Portfolio