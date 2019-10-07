import React, { Component } from 'react';
import Headshot from '../img/headshot.jpg'
import {Link} from 'react-router-dom'


class Footer extends Component {

	render() {
		const year = (new Date()).getFullYear();

		return(
			<footer>
				<Link to='/contact' className="CTA-home">Yeah, this fancy-pants website has already convinced me. Let's do this!</Link>
				<p>Copyright {year} Megan Spaulding Creative</p>
			</footer>
		)
	}

}

export default Footer