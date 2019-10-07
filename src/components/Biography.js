import React, { Component } from 'react';

class Biography extends Component {

	componentDidMount() {
		window.addEventListener('scroll', this.enterSide);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.enterSide);
	}

	enterSide = () => {
		const biography = document.getElementById('biography');
		let scroll = window.scrollY;
		if(scroll < 400){
			biography.style.marginLeft = (-100+(scroll/4))+'%';
			console.log(scroll);
		}
	}

	render() {
		return(
			<div id="biography">
				<p>We specialize in effective, </p>
			</div>
		)
	}

}

export default Biography

[instagram-feed hashtag="#wandereventrentals]