import React from 'react';
import CoffeeMap from './CoffeeMap';
class CoffeeLocator extends React.Component{
	
	render(){

		let divStyle = {
			color: "#ffffff",
			height: "50rem",
			paddingTop:"2rem",
			fontSize:"2rem",
		}
		

		
		return(
			<div class="ui right-aligned container"
				style={divStyle}>

				<center><span>Coffee Locator</span></center>
				<div>
					<CoffeeMap/>
				</div>
			</div>
		);
	}
}

export default CoffeeLocator;

