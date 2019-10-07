import React, { Component } from 'react';

	const trianglePositions = [
		{id: "triangle1", top: 100, left: 50, transform: "rotate(-50deg)", scroll: .25},
		{id: "triangle2", top: 25, left: 600, transform: "rotate(10deg)", scroll: 1},
		{id: "triangle3", top: 50, left: 1200, transform: "rotate(170deg)", scroll: .5},
		{id: "triangle4", top: 450, left: 350, transform: "rotate(-10deg)", scroll: .7},
		{id: "triangle5", top: 500, left: 900, transform: "rotate(60deg)", scroll: 2},
		{id: "triangle6", top: 800, left: 25, transform: "rotate(10deg)", scroll: .20},
		{id: "triangle7", top: 900, left: 1000, transform: "rotate(30deg)", scroll: 1.5},
		{id: "triangle8", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle9", top: 650, left: -70, transform: "rotate(0deg)", scroll: 1},
		{id: "triangle10", top: 950, left: 550, transform: "rotate(-10deg)", scroll: 1.2},
		{id: "triangle11", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle12", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle13", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle14", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle15", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle16", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5},
		{id: "triangle17", top: 800, left: 1350, transform: "rotate(-10deg)", scroll: 2.5}
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
		if(scrolled < 160){
			logo.style.transform = 'rotate(-'+ scrolled*.3 +'deg)';
		}
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