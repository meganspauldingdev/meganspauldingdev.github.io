import React, { Component } from 'react';

	const trianglePositions = [
		{id: "triangle1", top: 50, left: "50px"},
		{id: "triangle2", top: 100, left: "100px"},
		{id: "triangle3", top: 500, left: "500px"},
		{id: "triangle4", top: 1000, left: "1000px"},
		{id: "triangle5", top: 253, left: "500px"},
		{id: "triangle6", top: 1000, left: "50px"}
		]

class TriangleBackground extends Component {


	styleTriangles = (triangles) => {
		triangles.forEach(function(triangle){
			let triangleID = triangle.id;
			let el = document.getElementById(triangleID);
			el.style.top = triangle.top + "px";
			el.style.left = triangle.left;
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