import React, { Component } from 'react';

	const trianglePositions = [
		{id: "triangle1", top: 100, left: 50, transform: "rotate(-50deg)"},
		{id: "triangle2", top: 25, left: 600, transform: "rotate(10deg)"},
		{id: "triangle3", top: 50, left: 1200, transform: "rotate(170deg)"},
		{id: "triangle4", top: 500, left: 350, transform: "rotate(-10deg)"},
		{id: "triangle5", top: 400, left: 900, transform: "rotate(60deg)"},
		{id: "triangle6", top: 900, left: 25, transform: "rotate(10deg)"}
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