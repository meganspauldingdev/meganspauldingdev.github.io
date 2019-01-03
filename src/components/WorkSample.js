import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class WorkSample extends Component {

	render() {
		return(
			<Link to={'/portfolio/' + this.props.sample.id}>
				<div className="work-sample">
						<img src={this.props.sample.imageURL} alt={this.props.sample.name}/>

				</div>
			</Link>
		)
	}

}

export default WorkSample