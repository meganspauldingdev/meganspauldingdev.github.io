import React, { Component } from 'react';
import Headshot from '../img/headshot.jpg'

class Portfolio extends Component {

	render() {
		return(
			<section id="about">
				<h3>Hey There!</h3>
				<hr/>
				<div id="bio">
					<p>Topping dessert chupa chups gingerbread. Danish tootsie roll jelly-o. Pudding bonbon lemon drops powder jelly carrot cake danish. Marzipan jelly-o powder marshmallow soufflé pastry dessert. Sweet roll candy canes caramels biscuit. Soufflé cupcake cake. Muffin cheesecake oat cake oat cake gingerbread donut chocolate soufflé sesame snaps. Wafer ice cream biscuit sesame snaps soufflé fruitcake candy danish. Muffin pie candy canes jelly-o jelly beans soufflé bear claw jelly-o sweet. Oat cake macaroon pastry dragée.</p>
				</div>
				<img src={Headshot}/>
			</section>
		)
	}

}

export default Portfolio