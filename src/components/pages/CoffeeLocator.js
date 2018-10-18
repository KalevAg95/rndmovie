import React from 'react';

class CoffeeLocator extends React.Component{
	

	

	render(){

		let divStyle = {
			color: "#ffffff",
			height: "50rem",
			paddingTop:"2rem",
		}

		return(
			<div class="ui right-aligned container"
				style={divStyle}>

				<center><h2>Coffee Locator</h2></center>
			</div>
		);
	}
}

export default CoffeeLocator;