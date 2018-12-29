import React, { Component } from 'react';

class WorkSample extends Component {

	render() {
		return(
			<div className="work-sample" style={{ backgroundImage: `url(${this.props.sample.imageURL})`}}>{this.props.sample.name}</div>
		)
	}

}

export default WorkSample