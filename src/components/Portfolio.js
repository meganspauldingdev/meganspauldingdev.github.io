import React, { Component } from 'react';
import WorkSample from './WorkSample.js';

class Portfolio extends Component {

	render() {
		return(
			<section id="portfolio">
				<h3>{this.props.sectionTitle}</h3>
				<hr/>
				<div className="service-container">
				    {

                  		this.props.showingSamples.map((name, imageURL) => (<WorkSample name={name} imageURL={imageURL} />))

                    }

				</div>
			</section>
		)
	}

}

export default Portfolio