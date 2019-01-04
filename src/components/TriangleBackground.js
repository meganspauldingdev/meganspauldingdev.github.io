import React, { Component } from 'react';

	const trianglePositions = [
		{id: "triangle1", top: 100, left: 50, transform: "rotate(-50deg)", scroll: .25},
		{id: "triangle2", top: 25, left: 600, transform: "rotate(10deg)", scroll: 1},
		{id: "triangle3", top: 50, left: 1200, transform: "rotate(170deg)", scroll: .5},
		{id: "triangle4", top: 500, left: 350, transform: "rotate(-10deg)", scroll: .7},
		{id: "triangle5", top: 400, left: 900, transform: "rotate(60deg)", scroll: 2},
		{id: "triangle6", top: 900, left: 25, transform: "rotate(10deg)", scroll: .20}
		]

class TriangleBackground extends Component {


	styleTriangles = (triangles) => {
		triangles.forEach(function(triangle){
			let triangleID = triangle.id;
			let el = document.getElementById(triangleID);
			el.style.top = triangle.top + "px";
			el.style.left = triangle.left + "px";
			el.style.transform = triangle.transform;
		}
		)
	}



	componentDidMount() {
		this.styleTriangles(trianglePositions);
		window.addEventListener('scroll', this.logoRotate);
		window.addEventListener('scroll', this.parallaxTriangles);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.logoRotate);
		window.removeEventListener('scroll', this.parallaxTriangles);
	}

	logoRotate = () => {
		const logo = document.getElementById('msc-logo');
		let scrolled = window.scrollY;
		logo.style.transform = 'rotate(-'+ scrolled +'deg)';
	}

	parallaxTriangles = () => {

		trianglePositions.forEach(function(triangle){
				let triangleID = triangle.id;
				let el = document.getElementById(triangleID);	
				let scrolled = window.scrollY;
				el.style.top = (triangle.top-(scrolled*triangle.scroll))+'px';
		})

	}

	render() {

		return(


			<div>
				{trianglePositions.map((triangle, key) => (
					<div className="triangle" id={triangle.id}></div>
				))}
			</div>
		)

	}

}

export default TriangleBackground