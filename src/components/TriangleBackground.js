import React, { Component } from 'react';

	const trianglePositions = [
		{id: "triangle1", top: 100, left: 50, transform: "rotate(-50deg)", scroll: .25},
		{id: "triangle2", top: 25, left: 600, transform: "rotate(10deg)", scroll: 1},
		{id: "triangle3", top: 50, left: 1200, transform: "rotate(170deg)", scroll: .5},
		{id: "triangle4", top: 500, left: 350, transform: "rotate(-10deg)", scroll: .7},
		{id: "triangle5", top: 400, left: 900, transform: "rotate(60deg)", scroll: 2},
		{id: "triangle6", top: 750, left: 25, transform: "rotate(10deg)", scroll: .20},
		{id: "triangle7", top: 650, left: 1200, transform: "rotate(10deg)", scroll: .20},		
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

	parallaxScroll = (triangles) => {
		const triangleSet = triangles;
		triangleSet.forEach(function(triangle){
			window.addEventListener('scroll', function(e){
				let triangleID = triangle.id;
				let el = document.getElementById(triangleID);	
				let scrolled = window.scrollY;
				el.style.top = (triangle.top-(scrolled*triangle.scroll))+'px';
			})
		})
	}

	logoRotate = () => {
		const logo = document.getElementById('msc-logo');
		window.addEventListener('scroll', function(){
			let scrolled = window.scrollY;
			logo.style.transform = 'rotate(-'+ scrolled +'deg)';
		})
	}

	componentDidMount() {
		this.styleTriangles(trianglePositions);
		this.parallaxScroll(trianglePositions);
		this.logoRotate();
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