import React, { Component } from 'react';

class WorkSample extends Component {

	render() {
		return(
			<div className="work-sample">
				<img src={this.props.sample.imageURL} alt={this.props.sample.name}/>
			</div>
		)
	}

}

export default WorkSample