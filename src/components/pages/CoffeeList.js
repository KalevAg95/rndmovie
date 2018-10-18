import React from 'react';

class CoffeeList extends React.Component{
	
	render(){

		let divStyle = {
			color: "#ffffff",
			height: "50rem",
			paddingTop:"2rem",
			fontSize:"2rem",
		}

		return(
			<div class="ui left-aligned container" style={divStyle}>
				<center><span>Nearest Coffee Shops</span></center>
			
			</div>
		);
	}
}

export default CoffeeList;